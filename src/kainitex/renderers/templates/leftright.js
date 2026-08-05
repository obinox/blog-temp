import { SYMBOL_MAP } from "../../symbols/index.js";
import { mrow, mo } from "./basic.js";

export function leftrightTemplate(node, render) {
    const left = SYMBOL_MAP[node.leftDelim] || node.leftDelim;
    const right = SYMBOL_MAP[node.rightDelim] || node.rightDelim;
    const bodyHtml = node.body.map((child) => render(child)).join("");

    return mrow(mo(left, { fence: true, stretchy: true }) + mrow(bodyHtml) + mo(right, { fence: true, stretchy: true }));
}
