import lexer from "./lexer.js";
import { parse } from "./parser.js";
import { render } from "./core.js";

export function kainitex(input) {
    const tokens = lexer(input);
    const ast = parse(tokens);
    return render(ast);
}

export { parse };
export { default as lexer } from "./lexer.js";
export { render as renderToMathML };
