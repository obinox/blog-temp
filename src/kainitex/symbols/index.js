import { greek } from "./greek.js";
import { operators } from "./operators.js";
import { relations } from "./relations.js";
import { arrows } from "./arrows.js";
import { delimitersMisc } from "./delimiters_misc.js";

export const SYMBOL_MAP = Object.freeze({
    ...greek,
    ...operators,
    ...relations,
    ...arrows,
    ...delimitersMisc,
});

export const OPERATOR_SYMBOLS = new Set([...Object.keys(operators), ...Object.keys(relations), ...Object.keys(arrows)]);
