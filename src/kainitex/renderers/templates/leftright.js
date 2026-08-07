import { SYMBOL_MAP } from "../../symbols/index.js";
import { mrow, mo } from "./basic.js";

export function leftrightTemplate(node, render) {
    const leftKey = node.leftDelim.startsWith("\\") ? node.leftDelim.slice(1) : node.leftDelim;
    const rightKey = node.rightDelim.startsWith("\\") ? node.rightDelim.slice(1) : node.rightDelim;
    const left = SYMBOL_MAP[leftKey] || node.leftDelim;
    const right = SYMBOL_MAP[rightKey] || node.rightDelim;
    const bodyHtml = node.body.map((child) => render(child)).join("");

    return mrow(mo(left, { fence: true, stretchy: true }) + mrow(bodyHtml) + mo(right, { fence: true, stretchy: true }));
}
