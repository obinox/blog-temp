import { msqrt, mroot } from "./basic.js";

export function sqrtTemplate(node, render) {
    const arg = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    return msqrt(arg);
}

export function rootTemplate(node, render) {
    const arg = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const index = node.optArg.map((c) => render(c)).join("");
    return mroot(arg, index);
}
