import { TOKEN_TYPE } from "./types.js";
import { COMMANDS } from "./commands/index.js";
import { RootNode, SequenceNode, GroupNode, NumberNode, IdentifierNode, OperatorNode, ScriptNode, CommandNode, EnvironmentNode, ErrorNode } from "./nodes.js";

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
        return new SequenceNode(children);
    }

    parseExpr() {
        const atom = this.parseAtom();
        if (atom === null) return null;
        return this.parseScript(atom);
    }

    parseScript(base) {
        let sup = null;
        let sub = null;

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

        if (sup === null && sub === null) return base;
        return new ScriptNode(base, sup, sub);
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

            case TOKEN_TYPE.COMMAND:
                return this.parseCommand();

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

    parseCommand() {
        const token = this.consume(); // COMMAND
        const name = token.value.slice(1); // strip leading backslash

        const matrixCommands = new Set([
            "matrix", "pmatrix", "bmatrix", "vmatrix", "Vmatrix", "cases", "align", "gather", "array"
        ]);

        if (name === "begin") return this.parseEnvironment();

        if (matrixCommands.has(name)) {
            if (this.peek()?.type === TOKEN_TYPE.LBRACE) {
                return this.parseMatrixCommand(name);
            } else {
                return new ErrorNode(
                    `Command \\${name} expects content enclosed in curly braces {}`,
                    this.peek()?.value ?? ""
                );
            }
        }

        const spec = COMMANDS[name] ?? { args: 0, optArgs: 0 };

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
                return new ErrorNode(
                    `Command \\${name} expects argument enclosed in curly braces {}`,
                    nextToken ? nextToken.value : ""
                );
            }
        }

        return new CommandNode(name, args, optArg);
    }

    parseMatrixCommand(name) {
        this.consume(); // {
        const rows = [[[]]];
        let row = 0;
        let col = 0;

        while (this.pos < this.tokens.length) {
            const token = this.peek();
            if (!token) break;

            if (token.type === TOKEN_TYPE.RBRACE) {
                this.consume(); // }
                break;
            }

            if (token.type === TOKEN_TYPE.COMMAND && token.value === "\\\\") {
                this.consume();
                row++;
                col = 0;
                rows.push([[]]);
                continue;
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

        return new EnvironmentNode(name, rows);
    }

    parseEnvironment() {
        let envName = "";
        if (this.peek()?.type === TOKEN_TYPE.LBRACE) {
            this.consume(); // LBRACE ( { )
            while (this.peek() && this.peek().type !== TOKEN_TYPE.RBRACE) {
                envName += this.consume().value;
            }
            if (this.peek()?.type === TOKEN_TYPE.RBRACE) this.consume(); // RBRACE ( } )
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

            if (token.type === TOKEN_TYPE.COMMAND && token.value === "\\\\") {
                this.consume();
                row++;
                col = 0;
                rows.push([[]]);
                continue;
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
