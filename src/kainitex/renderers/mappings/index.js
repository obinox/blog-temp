import { fracMapping } from "./frac.js";
import { binomMapping } from "./binom.js";
import { sqrtMapping } from "./sqrt.js";
import { styleMapping } from "./style.js";
import { accentsMapping } from "./accents.js";
import { extensibleArrowsMapping } from "./extensible_arrows.js";
import { miscCommandsMapping } from "./misc_commands.js";

export const COMMAND_RENDERERS = {
    ...fracMapping,
    ...binomMapping,
    ...sqrtMapping,
    ...styleMapping,
    ...accentsMapping,
    ...extensibleArrowsMapping,
    ...miscCommandsMapping,
};

export { nodeMapping } from "./nodes.js";
