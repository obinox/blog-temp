import { fracTemplate } from "../templates/index.js";

export const fracMapping = {
    frac: (node, render) => fracTemplate(node, render),
    dfrac: (node, render) => fracTemplate(node, render, "true"),
    tfrac: (node, render) => fracTemplate(node, render, "false"),
    cfrac: (node, render) => fracTemplate(node, render, "true"),
    sfrac: (node, render) => fracTemplate(node, render),
    nicefrac: (node, render) => fracTemplate(node, render),
    flatfrac: (node, render) => fracTemplate(node, render),
    above: (node, render) => fracTemplate(node, render),
    over: (node, render) => fracTemplate(node, render),
    atop: (node, render) => fracTemplate(node, render, undefined, "0"),
};
