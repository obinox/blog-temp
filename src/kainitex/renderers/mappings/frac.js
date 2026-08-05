import { fracTemplate } from "../templates";

export const fracMapping = {
    frac: (node, render) => fracTemplate(node, render),
    dfrac: (node, render) => fracTemplate(node, render, true),
    tfrac: (node, render) => fracTemplate(node, render, false),
    cfrac: (node, render) => fracTemplate(node, render),
};
