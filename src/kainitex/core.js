import { NODE_TYPE } from "./types.js";
import { SYMBOL_MAP } from "./symbols/index.js";
import { symbol, fallback } from "./renderers/templates/index.js";
import { COMMAND_RENDERERS, nodeMapping } from "./renderers/index.js";

// AST -> MathML
export function render(node) {
    if (!node) return "";

    if (node.type === NODE_TYPE.COMMAND) {
        const cmdRenderer = COMMAND_RENDERERS[node.value];
        if (cmdRenderer) return cmdRenderer(node, render);

        const isKnownSymbol = SYMBOL_MAP[node.value] !== undefined;
        if (isKnownSymbol) return symbol(node);

        return fallback(node);
    }

    const renderer = nodeMapping[node.type];
    return renderer ? renderer(node, render) : "";
}
