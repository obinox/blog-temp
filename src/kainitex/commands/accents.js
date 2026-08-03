export const accents = {
    // Basic accents (1 arg)
    ["hat"]: { args: 1, optArgs: 0 }, // â circumflex accent
    ["check"]: { args: 1, optArgs: 0 }, // ǎ caron / háček accent
    ["breve"]: { args: 1, optArgs: 0 }, // ă breve accent (short vowel)
    ["acute"]: { args: 1, optArgs: 0 }, // á acute accent
    ["grave"]: { args: 1, optArgs: 0 }, // à grave accent
    ["tilde"]: { args: 1, optArgs: 0 }, // ã tilde accent
    ["bar"]: { args: 1, optArgs: 0 }, // ā macron / overline accent
    ["vec"]: { args: 1, optArgs: 0 }, // a⃗ vector arrow accent
    ["dot"]: { args: 1, optArgs: 0 }, // ȧ single dot (time derivative)
    ["ddot"]: { args: 1, optArgs: 0 }, // ä double dot (second derivative)
    ["dddot"]: { args: 1, optArgs: 0 }, // ⃛ triple dot (third derivative)
    ["ddddot"]: { args: 1, optArgs: 0 }, // ⃜ quadruple dot (fourth derivative)
    ["mathring"]: { args: 1, optArgs: 0 }, // å ring accent (Angstrom)

    // Wide accents
    ["widehat"]: { args: 1, optArgs: 0 }, // wide circumflex (spans expression)
    ["widetilde"]: { args: 1, optArgs: 0 }, // wide tilde (spans expression)
    ["widecheck"]: { args: 1, optArgs: 0 }, // wide caron (spans expression)
    ["wideparen"]: { args: 1, optArgs: 0 }, // wide parenthesis arc (spans expression)

    // Over / under decorations
    ["overline"]: { args: 1, optArgs: 0 }, // line above (conjugate, closure)
    ["underline"]: { args: 1, optArgs: 0 }, // line below (emphasis)
    ["overbrace"]: { args: 1, optArgs: 0 }, // brace above (grouping annotation)
    ["underbrace"]: { args: 1, optArgs: 0 }, // brace below (grouping annotation)
    ["overgroup"]: { args: 1, optArgs: 0 }, // group arc above
    ["undergroup"]: { args: 1, optArgs: 0 }, // group arc below
    ["overparen"]: { args: 1, optArgs: 0 }, // parenthesis arc above
    ["underparen"]: { args: 1, optArgs: 0 }, // parenthesis arc below

    // Over / under arrows
    ["overleftarrow"]: { args: 1, optArgs: 0 }, // ← arrow above (left)
    ["overrightarrow"]: { args: 1, optArgs: 0 }, // → arrow above (right, vector notation)
    ["overleftrightarrow"]: { args: 1, optArgs: 0 }, // ↔ bidirectional arrow above
    ["underleftarrow"]: { args: 1, optArgs: 0 }, // ← arrow below (left)
    ["underrightarrow"]: { args: 1, optArgs: 0 }, // → arrow below (right)
    ["underleftrightarrow"]: { args: 1, optArgs: 0 }, // ↔ bidirectional arrow below

    // Under tilde
    ["utilde"]: { args: 1, optArgs: 0 }, // tilde below expression

    // Stacking (2 args)
    ["overset"]: { args: 2, optArgs: 0 }, // place first arg over second arg
    ["underset"]: { args: 2, optArgs: 0 }, // place first arg under second arg
    ["stackrel"]: { args: 2, optArgs: 0 }, // stacked relation (symbol over relation)

    // Extensible arrows (1 arg + 1 optional for under-text)
    ["xrightarrow"]: { args: 1, optArgs: 1 }, // ⟶ extensible right arrow with label
    ["xleftarrow"]: { args: 1, optArgs: 1 }, // ⟵ extensible left arrow with label
    ["xLeftarrow"]: { args: 1, optArgs: 1 }, // ⟸ extensible double left arrow
    ["xRightarrow"]: { args: 1, optArgs: 1 }, // ⟹ extensible double right arrow
    ["xLeftrightarrow"]: { args: 1, optArgs: 1 }, // ⟺ extensible double bidirectional arrow
    ["xleftrightarrow"]: { args: 1, optArgs: 1 }, // ⟷ extensible bidirectional arrow
    ["xhookleftarrow"]: { args: 1, optArgs: 1 }, // ↩ extensible hooked left arrow
    ["xhookrightarrow"]: { args: 1, optArgs: 1 }, // ↪ extensible hooked right arrow
    ["xmapsto"]: { args: 1, optArgs: 1 }, // ⟼ extensible maps-to arrow
    ["xtwoheadleftarrow"]: { args: 1, optArgs: 1 }, // ↞ extensible two-headed left arrow
    ["xtwoheadrightarrow"]: { args: 1, optArgs: 1 }, // ↠ extensible two-headed right arrow
    ["xlongequal"]: { args: 1, optArgs: 1 }, // = extensible equals sign with label
    ["xrightharpoonup"]: { args: 1, optArgs: 1 }, // ⇀ extensible right harpoon up
    ["xrightharpoondown"]: { args: 1, optArgs: 1 }, // ⇁ extensible right harpoon down
    ["xleftharpoonup"]: { args: 1, optArgs: 1 }, // ↼ extensible left harpoon up
    ["xleftharpoondown"]: { args: 1, optArgs: 1 }, // ↽ extensible left harpoon down
    ["xrightleftharpoons"]: { args: 1, optArgs: 1 }, // ⇌ extensible equilibrium arrows
    ["xleftrightharpoons"]: { args: 1, optArgs: 1 }, // ⇋ extensible reverse equilibrium
};
