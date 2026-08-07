import { binomTemplate } from "../templates/index.js";

export const binomMapping = {
    binom: (node, render, context) => binomTemplate(node, render, context.displaystyle),
    dbinom: (node, render) => binomTemplate(node, render, "true"),
    tbinom: (node, render) => binomTemplate(node, render, "false"),
    choose: (node, render, context) => binomTemplate(node, render, context.displaystyle),
};
