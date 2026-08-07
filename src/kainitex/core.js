import { NODE_TYPE } from "./types.js";
import { SYMBOL_MAP } from "./symbols/index.js";
import { symbol, fallback, mstyle } from "./renderers/templates/index.js";
import { COMMAND_RENDERERS, nodeMapping } from "./renderers/index.js";

// AST -> MathML
export function render(node, context = {}) {
    if (!node) return "";

    const scopedRender = (child) => render(child, context);

    if (node.type === NODE_TYPE.STYLE) {
        const styleContext = {
            ...context,
            displaystyle: node.value === "displaystyle" ? "true" : node.value === "textstyle" ? "false" : context.displaystyle,
            scriptlevel: node.value === "scriptstyle" ? "1" : node.value === "scriptscriptstyle" ? "2" : context.scriptlevel,
        };
        const attrs = {
            displaystyle: styleContext.displaystyle,
            scriptlevel: styleContext.scriptlevel,
        };
        return mstyle(node.children.map((child) => render(child, styleContext)).join(""), attrs);
    }

    if (node.type === NODE_TYPE.COMMAND) {
        const cmdRenderer = COMMAND_RENDERERS[node.value];
        if (cmdRenderer) return cmdRenderer(node, scopedRender, context);

        const isKnownSymbol = SYMBOL_MAP[node.value] !== undefined;
        if (isKnownSymbol) return symbol(node);

        return fallback(node);
    }

    const renderer = nodeMapping[node.type];
    return renderer ? renderer(node, scopedRender) : "";
}
