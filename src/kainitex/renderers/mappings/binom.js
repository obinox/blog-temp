import { binomTemplate } from "../templates";

export const binomMapping = {
    binom: (node, render) => binomTemplate(node, render),
    dbinom: (node, render) => binomTemplate(node, render, true),
    tbinom: (node, render) => binomTemplate(node, render, false),
};
