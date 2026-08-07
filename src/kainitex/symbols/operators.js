const basicOperators = {
    pm: "±",
    mp: "∓",
    times: "×",
    div: "÷",
    cdot: "·",
    ast: "∗",
    star: "⋆",
    circ: "∘",
    bullet: "∙",
    diamond: "⋄",
    centerdot: "·",
};

const circledOperators = {
    oplus: "⊕",
    ominus: "⊖",
    otimes: "⊗",
    oslash: "⊘",
    odot: "⊙",
    circledast: "",
    circledcirc: "⊚",
    circleddash: "⊝",
};

const boxedOperators = {
    boxplus: "⊞",
    boxminus: "⊟",
    boxtimes: "⊠",
    boxdot: "⊡",
    box: "□",
};

const logicOperators = {
    wedge: "∧",
    vee: "∨",
    neg: "¬",
    barwedge: "⊼",
    veebar: "⊻",
};

const setOperators = {
    cap: "∩",
    cup: "∪",
    Cap: "⋒",
    Cup: "⋓",
    sqcap: "⊓",
    sqcup: "⊔",
    uplus: "⊎",
    setminus: "∖",
};

const productOperators = {
    ltimes: "⋉",
    rtimes: "⋊",
    leftthreetimes: "⋋",
    rightthreetimes: "⋌",
};

const miscOperators = {
    dagger: "†",
    ddagger: "‡",
    amalg: "⨿",
    wr: "≀",
};

const largeOperators = {
    sum: "∑",
    prod: "∏",
    coprod: "∐",
    int: "∫",
    iint: "∬",
    iiint: "∭",
    iiiint: "⨌",
    oint: "∮",
    oiint: "∯",
    oiiint: "∰",
    ointctrclockwise: "∳",
    ointclockwise: "∲",
};

const largeSetLogicOperators = {
    bigvee: "⋁",
    bigwedge: "⋀",
    bigcup: "⋃",
    bigcap: "⋂",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigodot: "⨀",
    bigsqcup: "⨆",
    bigsqcap: "⨅",
    biguplus: "⨄",
};

const aliasOperators = {
    land: logicOperators.wedge,
    lor: logicOperators.vee,
    lnot: logicOperators.neg,
    dag: miscOperators.dagger,
    ddag: miscOperators.ddagger,
};

const aliasLargeOperators = {
    integral: largeOperators.int,
    ointccw: largeOperators.ointctrclockwise,
    ointcw: largeOperators.ointclockwise,
};

export const operators = {
    ...basicOperators,
    ...circledOperators,
    ...boxedOperators,
    ...logicOperators,
    ...setOperators,
    ...productOperators,
    ...miscOperators,
    ...largeOperators,
    ...largeSetLogicOperators,
    ...aliasOperators,
    ...aliasLargeOperators,
};
