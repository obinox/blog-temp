import { NODE_TYPE } from "./types.js";
import { SYMBOL_MAP } from "./symbols/index.js";
import { symbol, fallback } from "./renderers/templates/basic.js";
import { COMMAND_RENDERERS, nodeMapping } from "./renderers/index.js";

// RUNNER: Executes the resolved renderer function to generate MathML markup
export function renderToMathML(node) {
    if (!node) return "";

    if (node.type === NODE_TYPE.COMMAND) {
        const cmdRenderer = COMMAND_RENDERERS[node.name];
        if (cmdRenderer) return cmdRenderer(node, renderToMathML);

        const isKnownSymbol = SYMBOL_MAP[node.name] !== undefined;
        if (isKnownSymbol) return symbol(node);

        return fallback(node);
    }

    const renderer = nodeMapping[node.type];
    return renderer ? renderer(node, renderToMathML) : "";
}
