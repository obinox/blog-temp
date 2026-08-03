import { fractionsRoots } from "./fractions_roots.js";
import { accents } from "./accents.js";
import { fontsSpacing } from "./fonts_spacing.js";
import { greek } from "./greek.js";
import { operators } from "./operators.js";
import { relations } from "./relations.js";
import { arrows } from "./arrows.js";
import { functions } from "./functions.js";
import { delimitersMisc } from "./delimiters_misc.js";
import { environments } from "./environments.js";

export const COMMANDS = Object.freeze({
    ...fractionsRoots,
    ...accents,
    ...fontsSpacing,
    ...greek,
    ...operators,
    ...relations,
    ...arrows,
    ...functions,
    ...delimitersMisc,
    ...environments,
});
