import { wrappedTableTemplate } from "../templates";

export const ENVIRONMENT_RENDERERS = {
    pmatrix: (node, render) => wrappedTableTemplate(node, render, "(", ")"),
    bmatrix: (node, render) => wrappedTableTemplate(node, render, "[", "]"),
    Bmatrix: (node, render) => wrappedTableTemplate(node, render, "{", "}"),
    vmatrix: (node, render) => wrappedTableTemplate(node, render, "|", "|"),
    Vmatrix: (node, render) => wrappedTableTemplate(node, render, "‖", "‖"),
    cases: (node, render) => wrappedTableTemplate(node, render, "{"),
};
