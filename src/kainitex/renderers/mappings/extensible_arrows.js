import { SYMBOL_MAP } from "../../symbols/index.js";
import { extensibleArrowTemplate } from "../templates/index.js";

export const extensibleArrowsMapping = {
    xrightarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xrightarrow"]),
    xleftarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xleftarrow"]),
    xLeftarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xLeftarrow"]),
    xRightarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xRightarrow"]),
    xLeftrightarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xLeftrightarrow"]),
    xleftrightarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xleftrightarrow"]),
    xhookleftarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xhookleftarrow"]),
    xhookrightarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xhookrightarrow"]),
    xmapsto: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xmapsto"]),
    xtwoheadleftarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xtwoheadleftarrow"]),
    xtwoheadrightarrow: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xtwoheadrightarrow"]),
    xlongequal: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xlongequal"]),
    xrightharpoonup: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xrightharpoonup"]),
    xrightharpoondown: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xrightharpoondown"]),
    xleftharpoonup: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xleftharpoonup"]),
    xleftharpoondown: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xleftharpoondown"]),
    xrightleftharpoons: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xrightleftharpoons"]),
    xleftrightharpoons: (node, render) => extensibleArrowTemplate(node, render, SYMBOL_MAP["xleftrightharpoons"]),
};
