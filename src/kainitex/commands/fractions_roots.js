export const fractionsRoots = {
    // Fractions
    ["frac"]: { args: 2, optArgs: 0 }, // standard fraction {numerator}{denominator}
    ["dfrac"]: { args: 2, optArgs: 0 }, // display-style fraction (full size)
    ["tfrac"]: { args: 2, optArgs: 0 }, // text-style fraction (inline size)
    ["cfrac"]: { args: 2, optArgs: 0 }, // continued fraction (centered numerator)
    ["sfrac"]: { args: 2, optArgs: 0 }, // slanted / diagonal fraction (a⁄b)
    ["nicefrac"]: { args: 2, optArgs: 0 }, // nicely typeset slanted fraction
    ["flatfrac"]: { args: 2, optArgs: 0 }, // flat inline fraction (a/b)

    // Roots
    ["sqrt"]: { args: 1, optArgs: 1 }, // square root, optional [n] for nth root

    // Binomial coefficients
    ["binom"]: { args: 2, optArgs: 0 }, // binomial coefficient (n choose k)
    ["dbinom"]: { args: 2, optArgs: 0 }, // display-style binomial coefficient
    ["tbinom"]: { args: 2, optArgs: 0 }, // text-style binomial coefficient
    ["choose"]: { args: 0, optArgs: 0, isInfix: true, mapToPrefix: "binom" }, // infix binomial (legacy TeX: n \choose k)

    // Generalized fractions
    ["above"]: { args: 0, optArgs: 0, isInfix: true, mapToPrefix: "above" }, // infix fraction with custom rule thickness
    ["atop"]: { args: 0, optArgs: 0, isInfix: true, mapToPrefix: "atop" }, // infix fraction without rule line
    ["over"]: { args: 0, optArgs: 0, isInfix: true, mapToPrefix: "frac" }, // infix fraction (legacy TeX: a \over b)
};
