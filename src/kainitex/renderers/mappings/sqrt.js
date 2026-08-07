import { sqrtTemplate, rootTemplate } from "../templates/index.js";

export const sqrtMapping = {
    sqrt: (node, render) => (node.optArg ? rootTemplate(node, render) : sqrtTemplate(node, render)),
};
