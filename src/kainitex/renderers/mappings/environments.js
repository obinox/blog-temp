import { wrappedTableTemplate } from "../templates/index.js";

export const environment_mapping = {
    pmatrix: (node, render) => wrappedTableTemplate(node, render, "(", ")"),
    bmatrix: (node, render) => wrappedTableTemplate(node, render, "[", "]"),
    Bmatrix: (node, render) => wrappedTableTemplate(node, render, "{", "}"),
    vmatrix: (node, render) => wrappedTableTemplate(node, render, "|", "|"),
    Vmatrix: (node, render) => wrappedTableTemplate(node, render, "‖", "‖"),
    cases: (node, render) => wrappedTableTemplate(node, render, "{"),
};
