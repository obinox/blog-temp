import { styleTemplate } from "../templates";

export const styleMapping = {
    mathrm: (node, render) => styleTemplate(node, render, "normal"),
    mathbf: (node, render) => styleTemplate(node, render, "bold"),
    mathit: (node, render) => styleTemplate(node, render, "italic"),
    mathsf: (node, render) => styleTemplate(node, render, "sans-serif"),
    mathtt: (node, render) => styleTemplate(node, render, "monospace"),
    text: (node, render) => styleTemplate(node, render, "normal"),
    mbox: (node, render) => styleTemplate(node, render, "normal"),
    textbf: (node, render) => styleTemplate(node, render, "bold"),
    textit: (node, render) => styleTemplate(node, render, "italic"),
    textrm: (node, render) => styleTemplate(node, render, "normal"),
    textsf: (node, render) => styleTemplate(node, render, "sans-serif"),
    texttt: (node, render) => styleTemplate(node, render, "monospace"),
    textnormal: (node, render) => styleTemplate(node, render, "normal"),
    textup: (node, render) => styleTemplate(node, render, "normal"),
};
