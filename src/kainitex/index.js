import lexer from './lexer.js';
import { parse } from './parser.js';

export function kainitex(input) {
  return parse(lexer(input));
}

export { parse };
export { default as lexer } from './lexer.js';
