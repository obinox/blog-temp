import lexer from "./lexer.js";
import { parse } from "./parser.js";
import { renderToMathML } from "./core.js";

export function kainitex(input) {
    const ast = parse(lexer(input));
    return renderToMathML(ast);
}

export { parse };
export { default as lexer } from "./lexer.js";
export { renderToMathML };
