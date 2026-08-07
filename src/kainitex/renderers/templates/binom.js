import { mrow, mo, mfrac } from "./basic.js";

export function binomTemplate(node, render, displayStyle, linethickness = "0") {
    const num = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const den = node.args[1] ? node.args[1].map((c) => render(c)).join("") : "";
    const attrs = { linethickness, displaystyle: displayStyle };

    return mrow(mo("(", { fence: true, stretchy: displayStyle }) + mfrac(num, den, attrs) + mo(")", { fence: true, stretchy: displayStyle }));
}
