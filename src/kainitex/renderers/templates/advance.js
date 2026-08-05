import { SYMBOL_MAP, OPERATOR_SYMBOLS } from "../../symbols";

export function mrowNode(node, render) {
    const inner = node.children.map((child) => render(child)).join("");
    return mrow(inner);
}

export function mnNode(node) {
    return mn(node.value);
}

export function miNode(node) {
    return mi(node.name);
}

export function moNode(node) {
    return mo(node.value);
}

export function symbol(node) {
    const unicodeVal = SYMBOL_MAP[node.name];
    const isOp = OPERATOR_SYMBOLS.has(node.name);
    return isOp ? mo(unicodeVal) : mi(unicodeVal);
}

export function fallback(node) {
    return mi(`\\${node.name}`);
}
