import { mo, mover, munder, munderover, mrow } from "./basic.js";

export function extensibleArrowTemplate(node, render, arrowSym) {
    const above = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const below = node.optArg ? node.optArg.map((c) => render(c)).join("") : "";
    if (above && below) {
        return munderover(mo(arrowSym), mrow(below), mrow(above));
    } else if (above) {
        return mover(mo(arrowSym), mrow(above));
    } else if (below) {
        return munder(mo(arrowSym), mrow(below));
    }
    return mo(arrowSym);
}
