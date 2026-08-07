import { mrow, mo, mtable, mtr, mtd } from "./basic.js";

export function tableTemplate(node, render) {
    return node.rows.map((row) => mtr(row.map((cell) => mtd(mrow(cell.map((c) => render(c)).join("")))).join(""))).join("");
}

export function wrappedTableTemplate(node, render, leftChar = "", rightChar = "") {
    const tableHtml = mtable(tableTemplate(node, render));
    const leftMo = leftChar ? mo(leftChar, { fence: "true", stretchy: "true" }) : "";
    const rightMo = rightChar ? mo(rightChar, { fence: "true", stretchy: "true" }) : "";
    return mrow(leftMo + tableHtml + rightMo);
}
