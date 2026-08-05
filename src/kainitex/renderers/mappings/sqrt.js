import { sqrtTemplate, rootTemplate } from "../templates";

export const sqrtMapping = {
    sqrt: (node, render) => (node.optArg ? rootTemplate(node, render) : sqrtTemplate(node, render)),
};
