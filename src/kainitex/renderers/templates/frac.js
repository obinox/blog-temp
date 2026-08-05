import { mfrac } from "./basic.js";

export function fracTemplate(node, render, displayStyle, linethickness) {
    const num = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const den = node.args[1] ? node.args[1].map((c) => render(c)).join("") : "";

    return mfrac(num, den, {
        displaystyle: displayStyle,
        linethickness: linethickness,
    });
}
