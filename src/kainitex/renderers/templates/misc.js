import { mrow, mo } from "./basic.js";

export function pmodTemplate(node, render) {
    const inner = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return mrow(mo("(") + mo("mod") + mrow(inner) + mo(")"));
}

export function modTemplate(node, render) {
    const inner = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return mrow(mo("mod") + mrow(inner));
}

export function podTemplate(node, render) {
    const inner = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return mrow(mo("(") + mrow(inner) + mo(")"));
}

export function boxedTemplate(node, render) {
    const inner = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return mrow(inner, { style: "border: 1px solid currentColor; padding: 2px;" });
}

export function cancelTemplate(node, render) {
    const inner = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return mrow(inner, { style: "text-decoration: line-through;" });
}

export function phantomTemplate() {
    return mrow("", { style: "visibility: hidden;" });
}

export function textcolorTemplate(node, render) {
    const inner = node.args[1] ? node.args[1].map((c) => render(c)).join("") : "";
    return mrow(inner);
}
