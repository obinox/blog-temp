import { pmodTemplate, modTemplate, podTemplate, boxedTemplate, cancelTemplate, phantomTemplate, textcolorTemplate } from "../templates/index.js";

export const miscCommandsMapping = {
    pmod: (node, render) => pmodTemplate(node, render),
    mod: (node, render) => modTemplate(node, render),
    pod: (node, render) => podTemplate(node, render),
    boxed: (node, render) => boxedTemplate(node, render),
    cancel: (node, render) => cancelTemplate(node, render),
    bcancel: (node, render) => cancelTemplate(node, render),
    xcancel: (node, render) => cancelTemplate(node, render),
    phantom: () => phantomTemplate(),
    hphantom: () => phantomTemplate(),
    vphantom: () => phantomTemplate(),
    hspace: () => "",
    vspace: () => "",
    color: () => "",
    textcolor: (node, render) => textcolorTemplate(node, render),
};
