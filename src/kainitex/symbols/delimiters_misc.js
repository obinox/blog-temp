const calculusSymbols = {
    infty: "∞",
    partial: "∂",
    nabla: "∇",
};

const quantifierSymbols = {
    forall: "∀",
    exists: "∃",
    nexists: "∄",
    top: "⊤",
    bot: "⊥",
};

const emptySetSymbols = {
    emptyset: "∅",
    varnothing: "⌀",
};

const ellipsisSymbols = {
    ldots: "…",
    cdots: "⋯",
    vdots: "⋮",
    ddots: "⋱",
    hdots: "⋯",
    iddots: "⋰",
};

const hebrewSymbols = {
    aleph: "ℵ",
    beth: "ℶ",
    gimel: "ℷ",
    daleth: "ℸ",
};

const constantSymbols = {
    hbar: "ℏ",
    hslash: "ℏ",
    ell: "ℓ",
    Re: "ℜ",
    Im: "ℑ",
    wp: "℘",
    complement: "∁",
};

const geometricSymbols = {
    angle: "∠",
    degree: "°",
    square: "□",
    blacksquare: "■",
    triangle: "△",
    lozenge: "◊",
    blacklozenge: "⧫",
};

const slashSymbols = {
    backslash: "\\",
};

const cardSuitSymbols = {
    clubsuit: "♣",
    diamondsuit: "♢",
    heartsuit: "♡",
    spadesuit: "♠",
};

const transformSymbols = {
    laplace: "ℒ",
    Fourier: "ℱ",
    fourier: "ℱ",
    Mellin: "ℳ",
    mellin: "ℳ",
};

const spacingSymbols = {
    quad: " ",
    qquad: "  ",
    thinspace: " ",
    medspace: " ",
    thickspace: " ",
    negthinspace: "‌",
};

constantSymbols.hslash = constantSymbols.hbar;
ellipsisSymbols.hdots = ellipsisSymbols.cdots;
transformSymbols.fourier = transformSymbols.Fourier;
transformSymbols.mellin = transformSymbols.Mellin;

export const delimitersMisc = {
    ...calculusSymbols,
    ...quantifierSymbols,
    ...emptySetSymbols,
    ...ellipsisSymbols,
    ...hebrewSymbols,
    ...constantSymbols,
    ...geometricSymbols,
    ...slashSymbols,
    ...cardSuitSymbols,
    ...transformSymbols,
    ...spacingSymbols,
};
