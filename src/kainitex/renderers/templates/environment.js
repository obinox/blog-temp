import { mrow, mo, mstyle, mtable, mtr, mtd } from "./basic.js";

export function tableTemplate(node, render) {
    return node.rows.map((row) => mtr(row.map((cell) => mtd(mrow(cell.map((c) => render(c)).join("")))).join(""))).join("");
}

export function wrappedTableTemplate(node, render, leftChar = "", rightChar = "", attrs = {}) {
    const tableHtml = attrs.displaystyle ? mstyle(mtable(tableTemplate(node, render)), { displaystyle: attrs.displaystyle }) : mtable(tableTemplate(node, render));
    const leftMo = leftChar ? mo(leftChar, { fence: "true", stretchy: "true" }) : "";
    const rightMo = rightChar ? mo(rightChar, { fence: "true", stretchy: "true" }) : "";
    return mrow(leftMo + tableHtml + rightMo);
}
