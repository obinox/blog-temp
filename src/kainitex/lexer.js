const token_regex = {
    COMMAND: /^\\(?:[a-zA-Z]+|.)/,
    NUMBER: /^\d+(?:\.\d+)?/,
    IDENTIFIER: /^\p{L}/u,

    LBRACE: /^\{/,
    RBRACE: /^\}/,
    LPAREN: /^\(/,
    RPAREN: /^\)/,
    LBRACKET: /^\[/,
    RBRACKET: /^\]/,

    SUP: /^\^/,
    SUB: /^_/,

    OPERATOR: /^[+\-*/=<>|,:;!?]/,
    ALIGN: /^&/,

    SPACE: /^[ \t\r\n]+/,
    COMMENT: /^%.*/,

    DOLLAR: /^\$/,
    TILDE: /^~/,

    CHAR: /^./u,
};

Object.freeze(token_regex);

function lexer(input) {
    const tokens = [];
    let index = 0;

    while (index < input.length) {
        const substring = input.slice(index);
        let matched = false;
        for (const [type, regex] of Object.entries(token_regex)) {
            const match = substring.match(regex);
            if (match) {
                const value = match[0];
                tokens.push({ type, value });
                index += value.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            throw new Error(`Unexpected character: ${substring[0]}`);
        }
    }
    return tokens;
}
