import { munderover, munder, mmover, msubsup, msub, msup } from "./basic.js";
import { NODE_TYPE } from "../../types.js";
import { COMMANDS } from "../../commands.js";

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

export function scriptTemplate(node, render) {
    const baseHtml = render(node.base);
    const supHtml = node.sup ? render(node.sup) : "";
    const subHtml = node.sub ? render(node.sub) : "";

    const isLargeOp = node.base.type === NODE_TYPE.COMMAND && COMMANDS[node.base.value]?.isLargeOp;
    const useUnderOver = node.limits === "limits" || (isLargeOp && node.limits !== "nolimits");

    return (useUnderOver ? underoverTemplate : subsupTemplate)(node, render, baseHtml, subHtml, supHtml);
}
