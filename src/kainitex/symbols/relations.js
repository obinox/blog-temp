const comparisonRelations = {
    leq: "≤",
    geq: "≥",
    neq: "≠",
    ll: "≪",
    gg: "≫",
    lll: "⋘",
    ggg: "⋙",
    leqq: "≦",
    geqq: "≧",
    leqslant: "⩽",
    geqslant: "⩾",
    lessgtr: "≶",
    gtrless: "≷",
};

const similarityRelations = {
    approx: "≈",
    approxeq: "≊",
    sim: "∼",
    simeq: "≃",
    equiv: "≡",
    cong: "≅",
    asymp: "≍",
    doteq: "≐",
    doteqdot: "≑",
    lesssim: "≲",
    gtrsim: "≳",
};

const setRelations = {
    subset: "⊂",
    supset: "⊃",
    subseteq: "⊆",
    supseteq: "⊇",
    subseteqq: "⫅",
    supseteqq: "⫆",
    Subset: "⋐",
    Supset: "⋑",
    sqsubset: "⊏",
    sqsupset: "⊐",
    sqsubseteq: "⊑",
    sqsupseteq: "⊒",
    in: "∈",
    notin: "∉",
    ni: "∋",
};

const orderRelations = {
    prec: "≺",
    succ: "≻",
    preceq: "⪯",
    succeq: "⪰",
    precsim: "≾",
    succsim: "≿",
    preccurlyeq: "≼",
    succcurlyeq: "≽",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
};

const geometryRelations = {
    propto: "∝",
    perp: "⊥",
    mid: "∣",
    parallel: "∥",
    shortmid: "∣",
    shortparallel: "∥",
    between: "≬",
    pitchfork: "⋔",
};

const turnstileRelations = {
    vdash: "⊢",
    dashv: "⊣",
    Vdash: "⊩",
    valign: "⊨",
    models: "⊧",
};

const triangleRelations = {
    triangleleft: "◁",
    triangleright: "▷",
    trianglelefteq: "⊴",
    trianglerighteq: "⊵",
};

const implicationRelations = {
    impliedby: "⟸",
    implies: "⟹",
    iff: "⟺",
};

const relationAliases = {
    le: comparisonRelations.leq,
    ge: comparisonRelations.geq,
    ne: comparisonRelations.neq,
    owns: setRelations.ni,
};

const negatedRelations = {
    nleq: "≰",
    ngeq: "≱",
    nsubseteq: "⊈",
    nsupseteq: "⊉",
    subsetneq: "⊊",
    supsetneq: "⊋",
    subsetneqq: "⫋",
    supsetneqq: "⫌",
    nprec: "⊀",
    nsucc: "⊁",
    npreceq: "⪯̸",
    nsucceq: "⪰̸",
    ncong: "≇",
    nsim: "≁",
    nmid: "∤",
    nparallel: "",
    ntriangleleft: "⋪",
    ntriangleright: "⋫",
    ntrianglelefteq: "⋬",
    ntrianglerighteq: "⋭",
};

const colonequalsRelations = {
    coloneq: "≔",
    Coloneq: "⩴",
    coloneqq: "≔",
    Coloneqq: "⩴",
    eqcolon: "≕",
    Eqcolon: "≕",
    coloncolon: "∷",
};

export const relations = {
    ...comparisonRelations,
    ...similarityRelations,
    ...setRelations,
    ...orderRelations,
    ...geometryRelations,
    ...turnstileRelations,
    ...triangleRelations,
    ...implicationRelations,
    ...relationAliases,
    ...negatedRelations,
    ...colonequalsRelations,
};
