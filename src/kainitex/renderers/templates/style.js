import { mrow } from "./basic.js";

export function styleTemplate(node, render, variant = "normal") {
    const inner = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return mrow(inner, { mathvariant: variant });
}
