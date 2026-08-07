import { binomTemplate } from "../templates/index.js";

export const binomMapping = {
    binom: (node, render) => binomTemplate(node, render),
    dbinom: (node, render) => binomTemplate(node, render, "true"),
    tbinom: (node, render) => binomTemplate(node, render, "false"),
    choose: (node, render) => binomTemplate(node, render),
};
