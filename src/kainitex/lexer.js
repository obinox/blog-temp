import TokenType from "./types.js";

function Lexer(input) {
    this.position = 0;
    this.input = input;
}
