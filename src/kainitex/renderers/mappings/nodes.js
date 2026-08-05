import { NODE_TYPE } from "../../types.js";
import { root, mrowNode, mnNode, miNode, moNode, leftrightTemplate, underoverTemplate, subsupTemplate, tableTemplate, errorTemplate } from "../templates";
import { ENVIRONMENT_RENDERERS } from "./environments.js";

const LARGE_OPS = new Set(["sum", "prod", "int", "integral", "coprod", "iint", "iiint", "iiiint", "oint", "oiint", "oiiint"]);

const SCRIPT_TEMPLATES = {
    true: underoverTemplate,
    false: subsupTemplate,
};

export const nodeMapping = {
    [NODE_TYPE.ROOT]: root,
    [NODE_TYPE.SEQUENCE]: mrowNode,
    [NODE_TYPE.GROUP]: mrowNode,
    [NODE_TYPE.NUMBER]: mnNode,
    [NODE_TYPE.IDENTIFIER]: miNode,
    [NODE_TYPE.OPERATOR]: moNode,
    [NODE_TYPE.LEFTRIGHT]: leftrightTemplate,
    [NODE_TYPE.ERROR]: errorTemplate,

    [NODE_TYPE.SCRIPT]: (node, render) => {
        const baseHtml = render(node.base);
        const supHtml = node.sup ? render(node.sup) : "";
        const subHtml = node.sub ? render(node.sub) : "";

        const isLargeOp = node.base.type === NODE_TYPE.COMMAND && LARGE_OPS.has(node.base.name);
        const useUnderOver = node.limits === "limits" || (isLargeOp && node.limits !== "nolimits");

        return SCRIPT_TEMPLATES[useUnderOver](node, render, baseHtml, subHtml, supHtml);
    },

    [NODE_TYPE.ENVIRONMENT]: (node, render) => {
        const envRenderer = ENVIRONMENT_RENDERERS[node.name] || ((n, r) => `<mtable>${tableTemplate(n, r)}</mtable>`);
        return envRenderer(node, render);
    },
};
