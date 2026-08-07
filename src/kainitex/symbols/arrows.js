const extensibleArrows = {
    xrightarrow: "→",
    xleftarrow: "←",
    xLeftarrow: "⇐",
    xRightarrow: "⇒",
    xLeftrightarrow: "⇔",
    xleftrightarrow: "↔",
    xhookleftarrow: "↩",
    xhookrightarrow: "↪",
    xmapsto: "↦",
    xtwoheadleftarrow: "↞",
    xtwoheadrightarrow: "↠",
    xlongequal: "=",
    xrightharpoonup: "⇀",
    xrightharpoondown: "⇁",
    xleftharpoonup: "↼",
    xleftharpoondown: "↽",
    xrightleftharpoons: "⇌",
    xleftrightharpoons: "⇋",
};

const basicArrows = {
    rightarrow: "→",
    leftarrow: "←",
    Rightarrow: "⇒",
    Leftarrow: "⇐",
    leftrightarrow: "↔",
    Leftrightarrow: "⇔",
    uparrow: "↑",
    downarrow: "↓",
    Uparrow: "⇑",
    Downarrow: "⇓",
    updownarrow: "↕",
    Updownarrow: "⇕",
};

const arrowAliases = {
    to: basicArrows.rightarrow,
    gets: basicArrows.leftarrow,
    mapsto: extensibleArrows.xmapsto,
};

const diagonalArrows = {
    nearrow: "↗",
    searrow: "↘",
    nwarrow: "↖",
    swarrow: "↙",
};

const harpoonArrows = {
    rightharpoonup: "⇀",
    rightharpoondown: "⇁",
    leftharpoonup: "↼",
    leftharpoondown: "↽",
    rightleftharpoons: "⇌",
    leftrightharpoons: "⇋",
};

const hookedTwoheadArrows = {
    hookrightarrow: "↪",
    hookleftarrow: "↩",
    twoheadrightarrow: "↠",
    twoheadleftarrow: "↞",
    rightarrowtail: "↣",
    leftarrowtail: "↢",
};

const longArrows = {
    longrightarrow: "⟶",
    longleftarrow: "⟵",
    longleftrightarrow: "⟷",
    Longrightarrow: "⟹",
    Longleftarrow: "⟸",
    Longleftrightarrow: "⟺",
    longmapsto: "⟼",
};

const curvedArrows = {
    curvearrowright: "↷",
    curvearrowleft: "↶",
    circlearrowright: "↻",
    circlearrowleft: "↺",
    dashrightarrow: "⇢",
    dashleftarrow: "⇠",
    rightsquigarrow: "⇝",
    leftrightsquigarrow: "↭",
    leadsto: "⇝",
    multimap: "⊸",
};

const negatedArrows = {
    nrightarrow: "↛",
    nleftarrow: "↚",
    nRightarrow: "⇏",
    nLeftarrow: "⇍",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎",
};

export const arrows = {
    ...extensibleArrows,
    ...basicArrows,
    ...arrowAliases,
    ...diagonalArrows,
    ...harpoonArrows,
    ...hookedTwoheadArrows,
    ...longArrows,
    ...curvedArrows,
    ...negatedArrows,
};
