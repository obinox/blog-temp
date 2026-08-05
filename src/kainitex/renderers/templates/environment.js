import { mrow, mo, mtable, mtr, mtd } from "./basic.js";

export function tableTemplate(node, render) {
    return node.rows
        .map((row) => {
            const cellsHtml = row
                .map((cell) => {
                    const cellInner = cell.map((c) => render(c)).join("");
                    return mtd(mrow(cellInner));
                })
                .join("");
            return mtr(cellsHtml);
        })
        .join("");
}

export function wrappedTableTemplate(node, render, leftChar = "", rightChar = "") {
    const tableHtml = mtable(tableTemplate(node, render));
    return mrow(mo(leftChar, { fence: true }) + tableHtml + mo(rightChar, { fence: true }));
}
