import { munderover, munder, mmover, msubsup, msub, msup } from "./basic.js";

export function underoverTemplate(node, render, baseHtml, subHtml, supHtml) {
    if (supHtml && subHtml) return munderover(baseHtml, subHtml, supHtml);
    if (supHtml) return mmover(baseHtml, supHtml);
    return munder(baseHtml, subHtml);
}

export function subsupTemplate(node, render, baseHtml, subHtml, supHtml) {
    if (supHtml && subHtml) return msubsup(baseHtml, subHtml, supHtml);
    if (supHtml) return msup(baseHtml, supHtml);
    return msub(baseHtml, subHtml);
}
