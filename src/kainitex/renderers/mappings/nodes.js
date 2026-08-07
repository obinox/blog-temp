import { NODE_TYPE } from "../../types.js";
import { root, mrowNode, mnNode, miNode, moNode, leftrightTemplate, tableTemplate, errorTemplate, scriptTemplate, mtable } from "../templates/index.js";
import { environment_mapping } from "./environments.js";

export const nodeMapping = {
    [NODE_TYPE.ROOT]: (node, render) => root(node, render),
    [NODE_TYPE.SEQUENCE]: (node, render) => mrowNode(node, render),
    [NODE_TYPE.GROUP]: (node, render) => mrowNode(node, render),
    [NODE_TYPE.NUMBER]: (node, render) => mnNode(node, render),
    [NODE_TYPE.IDENTIFIER]: (node, render) => miNode(node, render),
    [NODE_TYPE.OPERATOR]: (node, render) => moNode(node, render),
    [NODE_TYPE.LEFTRIGHT]: (node, render) => leftrightTemplate(node, render),
    [NODE_TYPE.ERROR]: (node, render) => errorTemplate(node, render),
    [NODE_TYPE.SCRIPT]: (node, render) => scriptTemplate(node, render),
    [NODE_TYPE.ENVIRONMENT]: (node, render) => {
        const envRenderer = environment_mapping[node.value] || ((n, r) => mtable(tableTemplate(n, r)));
        return envRenderer(node, render);
    },
};
