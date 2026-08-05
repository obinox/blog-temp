import { fracMapping } from "./frac.js";
import { binomMapping } from "./binom.js";
import { sqrtMapping } from "./sqrt.js";
import { styleMapping } from "./style.js";

export const COMMAND_RENDERERS = {
    ...fracMapping,
    ...binomMapping,
    ...sqrtMapping,
    ...styleMapping,
};

export { nodeMapping } from "./nodes.js";
