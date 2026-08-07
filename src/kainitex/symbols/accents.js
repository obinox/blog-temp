const basicAccents = {
    hat: "^",
    check: "ˇ",
    breve: "˘",
    acute: "´",
    grave: "`",
    tilde: "~",
    bar: "¯",
    vec: "→",
    dot: "˙",
    ddot: "¨",
    dddot: "⋯",
    ddddot: "⋰",
    mathring: "˚",
};

const wideAccents = {
    widehat: "^",
    widetilde: "~",
    widecheck: "ˇ",
    wideparen: "⌒",
    overline: "¯",
    underline: "_",
    overbrace: "⏞",
    underbrace: "⏟",
};

const groupAccents = {
    overgroup: "⏜",
    undergroup: "⏝",
    overparen: "⌒",
    underparen: "‿",
    utilde: "~",
};

const arrowAccents = {
    overleftarrow: "←",
    overrightarrow: "→",
    overleftrightarrow: "↔",
    underleftarrow: "←",
    underrightarrow: "→",
    underleftrightarrow: "↔",
};

export const accents = {
    ...basicAccents,
    ...wideAccents,
    ...groupAccents,
    ...arrowAccents,
};
