import { TOKEN_TYPE, NODE_TYPE, ALLOWED_DELIMITER_TYPES } from "./types.js";
import { COMMANDS } from "./commands.js";
import { RootNode, SequenceNode, GroupNode, NumberNode, IdentifierNode, OperatorNode, ScriptNode, CommandNode, EnvironmentNode, ErrorNode, LeftRightNode } from "./nodes.js";

class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.pos = 0;
    }

    peek() {
        return this.tokens[this.pos] ?? null;
    }

    consume() {
        return this.tokens[this.pos++] ?? null;
    }

    parse() {
        const seq = this.parseSequence();
        return new RootNode(seq.children);
    }

    parseSequence(stopType = null) {
        const children = [];
        while (this.pos < this.tokens.length) {
            const token = this.peek();
            if (!token) break;
            if (stopType && token.type === stopType) break;
            if (token.type === TOKEN_TYPE.RBRACE) break;
            const node = this.parseExpr();
            if (node !== null) children.push(node);
        }
        return new SequenceNode(this.resolveInfixOperators(children));
    }

    resolveInfixOperators(children) {
        let infixIdx = -1;

        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.type === NODE_TYPE.COMMAND && COMMANDS[node.name]?.isInfix) {
                infixIdx = i;
                break;
            }
        }

        if (infixIdx === -1) {
            return children;
        }

        const infixNode = children[infixIdx];
        const leftSide = children.slice(0, infixIdx);
        const rightSide = children.slice(infixIdx + 1);

        const numNode = new GroupNode(leftSide);
        const denNode = new GroupNode(rightSide);

        const mapTo = COMMANDS[infixNode.name].mapToPrefix;
        const resolvedNode = new CommandNode(mapTo, [[numNode], [denNode]]);

        return [resolvedNode];
    }

    parseExpr() {
        const atom = this.parseAtom();
        if (atom === null) return null;
        return this.parseScript(atom);
    }

    parseScript(base) {
        let sup = null;
        let sub = null;
        let limits = null;

        const nextToken = this.peek();
        if (nextToken && nextToken.type === TOKEN_TYPE.COMMAND) {
            const cmdName = nextToken.value.slice(1);
            if (COMMANDS[cmdName]?.isLimitModifier) {
                this.consume();
                limits = cmdName; // "limits" or "nolimits"
            }
        }

        while (true) {
            const token = this.peek();
            if (!token) break;
            if (token.type === TOKEN_TYPE.SUP && sup === null) {
                this.consume();
                sup = this.parseScriptArg();
            } else if (token.type === TOKEN_TYPE.SUB && sub === null) {
                this.consume();
                sub = this.parseScriptArg();
            } else {
                break;
            }
        }

        if (sup === null && sub === null && limits === null) return base;
        return new ScriptNode(base, sup, sub, limits);
    }

    parseScriptArg() {
        const token = this.peek();
        if (token && token.type === TOKEN_TYPE.LBRACE) {
            return this.parseGroup();
        }
        return this.parseAtom();
    }

    parseAtom() {
        const token = this.peek();
        if (!token) return null;

        switch (token.type) {
            case TOKEN_TYPE.NUMBER:
                this.consume();
                return new NumberNode(token.value);

            case TOKEN_TYPE.IDENTIFIER:
                this.consume();
                return new IdentifierNode(token.value);

            case TOKEN_TYPE.OPERATOR:
                this.consume();
                return new OperatorNode(token.value);

            case TOKEN_TYPE.LBRACE:
                return this.parseGroup();

            case TOKEN_TYPE.COMMAND: {
                const cmdName = token.value.slice(1);
                const spec = COMMANDS[cmdName];
                if (spec?.isLeft) {
                    return this.parseLR();
                }
                if (spec?.isRight) {
                    this.consume();
                    return new ErrorNode(`unmatched \\${cmdName}`, token.value);
                }
                return this.parseCommand();
            }

            case TOKEN_TYPE.LPAREN:
            case TOKEN_TYPE.RPAREN:
            case TOKEN_TYPE.LBRACKET:
            case TOKEN_TYPE.RBRACKET:
                this.consume();
                return new OperatorNode(token.value);

            case TOKEN_TYPE.CHAR:
                this.consume();
                return new IdentifierNode(token.value);

            case TOKEN_TYPE.TILDE:
                this.consume();
                return new OperatorNode(token.value);

            default:
                this.consume();
                return new ErrorNode(`unexpected token ${token.type}`, token.value);
        }
    }

    parseGroup() {
        this.consume(); // LBRACE
        const seq = this.parseSequence(); // stops at RBRACE
        if (this.peek()?.type === TOKEN_TYPE.RBRACE) this.consume();
        return new GroupNode(seq.children);
    }

    parseLR() {
        const leftToken = this.consume(); // consume \left (or equivalent left marker)
        const leftCmd = leftToken.value.slice(1);

        const leftDelimToken = this.peek();
        if (!leftDelimToken) {
            return new ErrorNode(`Expect delimiter after \\${leftCmd}`);
        }

        if (!ALLOWED_DELIMITER_TYPES.has(leftDelimToken.type)) {
            return new ErrorNode(`Invalid delimiter after \\${leftCmd}: ${leftDelimToken.value}`);
        }

        const leftDelim = leftDelimToken.value;
        this.consume(); // consume left delimiter

        const body = [];
        let foundRight = false;

        while (this.pos < this.tokens.length) {
            const token = this.peek();
            if (!token) break;

            if (token.type === TOKEN_TYPE.COMMAND) {
                const cmdName = token.value.slice(1);
                if (COMMANDS[cmdName]?.isRight) {
                    this.consume(); // consume \right
                    foundRight = true;
                    break;
                }
            }

            const node = this.parseExpr();
            if (node !== null) {
                body.push(node);
            }
        }

        if (!foundRight) {
            return new ErrorNode(`Missing matching right delimiter for \\${leftCmd}`);
        }

        const rightDelimToken = this.peek();
        if (!rightDelimToken || !ALLOWED_DELIMITER_TYPES.has(rightDelimToken.type)) {
            return new ErrorNode("Expect delimiter after \\right");
        }

        const rightDelim = rightDelimToken.value;
        this.consume(); // consume right delimiter

        return new LeftRightNode(leftDelim, rightDelim, body);
    }

    parseCommand() {
        const token = this.consume(); // COMMAND
        const value = token.value.slice(1); // strip leading backslash

        if (value === "begin") return this.parseEnv();

        const spec = COMMANDS[value] ?? { args: 0, optArgs: 0 };

        if (spec.isEnv) {
            if (this.peek()?.type === TOKEN_TYPE.LBRACE) {
                return this.parseMatrix(value);
            } else {
                return new ErrorNode(`Command \\${value} expects content enclosed in curly braces {}`, this.peek()?.value ?? "");
            }
        }

        let optArg = null;
        if (spec.optArgs > 0 && this.peek()?.type === TOKEN_TYPE.LBRACKET) {
            this.consume(); // [
            const seq = this.parseSequence(TOKEN_TYPE.RBRACKET);
            if (this.peek()?.type === TOKEN_TYPE.RBRACKET) this.consume();
            optArg = seq.children;
        }

        const args = [];
        for (let i = 0; i < spec.args; i++) {
            if (this.peek()?.type === TOKEN_TYPE.LBRACE) {
                const group = this.parseGroup();
                args.push(group.children);
            } else {
                const nextToken = this.peek();
                return new ErrorNode(`Command \\${value} expects argument enclosed in curly braces {}`, nextToken ? nextToken.value : "");
            }
        }

        return new CommandNode(value, args, optArg, spec.isOp);
    }

    parseMatrix(value) {
        this.consume(); // LBRACE
        const rows = [[[]]];
        let row = 0;
        let col = 0;

        while (this.pos < this.tokens.length) {
            const token = this.peek();
            if (!token) break;

            if (token.type === TOKEN_TYPE.RBRACE) {
                this.consume(); // RBRACE
                break;
            }

            if (token.type === TOKEN_TYPE.COMMAND) {
                const cmdName = token.value.slice(1);
                if (COMMANDS[cmdName]?.isNewLine) {
                    this.consume();
                    row++;
                    col = 0;
                    rows.push([[]]);
                    continue;
                }
            }

            if (token.type === TOKEN_TYPE.ALIGN) {
                this.consume();
                col++;
                if (!rows[row][col]) rows[row].push([]);
                continue;
            }

            const node = this.parseExpr();
            if (node !== null) rows[row][col].push(node);
        }

        return new EnvironmentNode(value, rows);
    }

    parseEnv() {
        let envName = "";
        if (this.peek()?.type === TOKEN_TYPE.LBRACE) {
            this.consume(); // LBRACE
            while (this.peek() && this.peek().type !== TOKEN_TYPE.RBRACE) {
                envName += this.consume().value;
            }
            if (this.peek()?.type === TOKEN_TYPE.RBRACE) this.consume(); // RBRACE
        }

        const rows = [[[]]];
        let row = 0;
        let col = 0;

        while (this.pos < this.tokens.length) {
            const token = this.peek();
            if (!token) break;

            if (token.type === TOKEN_TYPE.COMMAND && token.value === "\\end") {
                this.consume();
                if (this.peek()?.type === TOKEN_TYPE.LBRACE) {
                    this.consume();
                    while (this.peek() && this.peek().type !== TOKEN_TYPE.RBRACE) this.consume();
                    if (this.peek()?.type === TOKEN_TYPE.RBRACE) this.consume();
                }
                break;
            }

            if (token.type === TOKEN_TYPE.COMMAND) {
                const cmdName = token.value.slice(1);
                if (COMMANDS[cmdName]?.isNewLine) {
                    this.consume();
                    row++;
                    col = 0;
                    rows.push([[]]);
                    continue;
                }
            }

            if (token.type === TOKEN_TYPE.ALIGN) {
                this.consume();
                col++;
                if (!rows[row][col]) rows[row].push([]);
                continue;
            }

            const node = this.parseExpr();
            if (node !== null) rows[row][col].push(node);
        }

        return new EnvironmentNode(envName, rows);
    }
}

export function parse(tokens) {
    return new Parser(tokens).parse();
}
