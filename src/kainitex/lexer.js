import { TOKEN_TYPE } from "./types.js";

const SKIP = new Set([TOKEN_TYPE.SPACE, TOKEN_TYPE.COMMENT]);

const token_regex = {
    [TOKEN_TYPE.COMMAND]: /\\(?:[a-zA-Z]+|.)/y,
    [TOKEN_TYPE.NUMBER]: /\d+(?:\.\d+)?/y,
    [TOKEN_TYPE.IDENTIFIER]: /\p{L}/uy,
    [TOKEN_TYPE.LBRACE]: /\{/y,
    [TOKEN_TYPE.RBRACE]: /\}/y,
    [TOKEN_TYPE.LPAREN]: /\(/y,
    [TOKEN_TYPE.RPAREN]: /\)/y,
    [TOKEN_TYPE.LBRACKET]: /\[/y,
    [TOKEN_TYPE.RBRACKET]: /\]/y,
    [TOKEN_TYPE.SUP]: /\^/y,
    [TOKEN_TYPE.SUB]: /_/y,
    [TOKEN_TYPE.OPERATOR]: /[+\-*/=<>|,:;!?]/y,
    [TOKEN_TYPE.ALIGN]: /&/y,
    [TOKEN_TYPE.SPACE]: /[ \t\r\n]+/y,
    [TOKEN_TYPE.COMMENT]: /%.*/y,
    [TOKEN_TYPE.DOLLAR]: /\$/y,
    [TOKEN_TYPE.TILDE]: /~/y,
    [TOKEN_TYPE.CHAR]: /./uy,
};

Object.freeze(token_regex);

export default function lexer(input) {
    const tokens = [];
    let index = 0;

    while (index < input.length) {
        let matched = false;
        for (const [type, regex] of Object.entries(token_regex)) {
            regex.lastIndex = index;
            const match = regex.exec(input);
            if (match) {
                const value = match[0];
                if (!SKIP.has(type)) {
                    tokens.push({ type, value });
                }
                index += value.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            throw new Error(`Unexpected character in position ${index}: ${input[index]}`);
        }
    }
    return tokens;
}
