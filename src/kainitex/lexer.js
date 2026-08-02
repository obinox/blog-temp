const token_regex = [
    ["COMMAND", /\\(?:[a-zA-Z]+|.)/y],
    ["NUMBER", /\d+(?:\.\d+)?/y],
    ["IDENTIFIER", /\p{L}/uy],

    ["LBRACE", /\{/y],
    ["RBRACE", /\}/y],
    ["LPAREN", /\(/y],
    ["RPAREN", /\)/y],
    ["LBRACKET", /\[/y],
    ["RBRACKET", /\]/y],

    ["SUP", /\^/y],
    ["SUB", /_/y],

    ["OPERATOR", /[+\-*/=<>|,:;!?]/y],
    ["ALIGN", /&/y],

    ["DOLLAR", /\$/y],
    ["TILDE", /~/y],

    ["CHAR", /./uy],
];

const space_regex = /\s+/y;
const comment_regex = /%.*/y;

class Token {
    constructor(type, value, start, end, line, column) {
        this.type = type;
        this.value = value;

        this.start = start;
        this.end = end;

        this.line = line;
        this.column = column;
    }
}

class Lexer {
    constructor(input) {
        this.input = input;

        this.pos = 0;
        this.line = 1;
        this.column = 1;
    }

    move(text) {
        for (const c of text) {
            if (c === "\n") {
                this.line++;
                this.column = 1;
            } else {
                this.column++;
            }
        }
        this.pos += text.length;
    }

    skipSpace() {
        while (true) {
            space_regex.lastIndex = this.pos;
            const match = space_regex.exec(this.input);
            if (!match) break;
            this.move(match[0]);
        }
    }

    skipComment() {
        comment_regex.lastIndex = this.pos;
        const match = comment_regex.exec(this.input);
        if (!match) return false;
        this.move(match[0]);
        return true;
    }

    skip() {
        while (true) {
            const oldPos = this.pos;

            this.skipSpace();
            this.skipComment();

            if (this.pos === oldPos) break;
        }
    }

    createToken(type, value) {
        const token = new Token(type, value, this.pos, this.pos + value.length, this.line, this.column);
        this.move(value);
        return token;
    }

    nextToken() {
        this.skip();

        if (this.pos >= this.input.length) return null;

        for (const [type, regex] of token_regex) {
            regex.lastIndex = this.pos;
            const match = regex.exec(this.input);
            if (!match) continue;
            let value = match[0];

            // \frac -> frac
            if (type === "COMMAND") value = value.slice(1);

            return this.createToken(type, value);
        }
        throw new Error(`Unexpected character '${this.input[this.pos]}' at ${this.line}:${this.column}`);
    }

    tokenize() {
        const tokens = [];
        while (true) {
            const token = this.nextToken();
            if (token === null) break;

            tokens.push(token);
        }
        return tokens;
    }
}
