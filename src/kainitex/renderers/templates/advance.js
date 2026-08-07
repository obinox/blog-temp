import { SYMBOL_MAP, OPERATOR_CHAR_MAP } from "../../symbols/index.js";
import { mrow, mn, mi, mo } from "./basic.js";

export function mrowNode(node, render) {
    const inner = node.children.map((child) => render(child)).join("");
    return mrow(inner);
}

export function mnNode(node) {
    return mn(node.value);
}

export function miNode(node) {
    return mi(node.value);
}

export function moNode(node) {
    const val = OPERATOR_CHAR_MAP[node.value] ?? node.value;
    return mo(val);
}

export function symbol(node) {
    const unicodeVal = SYMBOL_MAP[node.value] ?? node.value;
    return node.isOp ? mo(unicodeVal) : mi(unicodeVal);
}

export function fallback(node) {
    return node.isOp ? mo(node.value) : mi(`\\${node.value}`);
}
