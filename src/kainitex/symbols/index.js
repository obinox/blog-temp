import { greek } from "./greek.js";
import { operators } from "./operators.js";
import { relations } from "./relations.js";
import { arrows } from "./arrows.js";
import { delimitersMisc } from "./delimiters_misc.js";
import { functions } from "./functions.js";
import { accents } from "./accents.js";

export const OPERATOR_CHAR_MAP = Object.freeze({
    "-": "−", // U+2212 Mathematical Minus Sign
    "*": "∗", // U+2217 Asterisk Operator
});

export const SYMBOL_MAP = Object.freeze({
    ...greek,
    ...operators,
    ...relations,
    ...arrows,
    ...delimitersMisc,
    ...functions,
    ...accents,
});
