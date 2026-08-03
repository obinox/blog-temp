export const functions = {
    // Trigonometric
    ["sin"]: { args: 0, optArgs: 0 }, // sine
    ["cos"]: { args: 0, optArgs: 0 }, // cosine
    ["tan"]: { args: 0, optArgs: 0 }, // tangent
    ["cot"]: { args: 0, optArgs: 0 }, // cotangent
    ["sec"]: { args: 0, optArgs: 0 }, // secant
    ["csc"]: { args: 0, optArgs: 0 }, // cosecant

    // Inverse trigonometric
    ["arcsin"]: { args: 0, optArgs: 0 }, // inverse sine
    ["arccos"]: { args: 0, optArgs: 0 }, // inverse cosine
    ["arctan"]: { args: 0, optArgs: 0 }, // inverse tangent
    ["arccot"]: { args: 0, optArgs: 0 }, // inverse cotangent
    ["arcsec"]: { args: 0, optArgs: 0 }, // inverse secant
    ["arccsc"]: { args: 0, optArgs: 0 }, // inverse cosecant

    // Hyperbolic
    ["sinh"]: { args: 0, optArgs: 0 }, // hyperbolic sine
    ["cosh"]: { args: 0, optArgs: 0 }, // hyperbolic cosine
    ["tanh"]: { args: 0, optArgs: 0 }, // hyperbolic tangent
    ["coth"]: { args: 0, optArgs: 0 }, // hyperbolic cotangent
    ["sech"]: { args: 0, optArgs: 0 }, // hyperbolic secant
    ["csch"]: { args: 0, optArgs: 0 }, // hyperbolic cosecant

    // Logarithmic / exponential
    ["log"]: { args: 0, optArgs: 0 }, // logarithm
    ["ln"]: { args: 0, optArgs: 0 }, // natural logarithm
    ["lg"]: { args: 0, optArgs: 0 }, // common logarithm (base 10)
    ["exp"]: { args: 0, optArgs: 0 }, // exponential function

    // Limits / extrema
    ["lim"]: { args: 0, optArgs: 0 }, // limit
    ["limsup"]: { args: 0, optArgs: 0 }, // limit superior
    ["liminf"]: { args: 0, optArgs: 0 }, // limit inferior
    ["varlimsup"]: { args: 0, optArgs: 0 }, // limit superior (variant overline)
    ["varliminf"]: { args: 0, optArgs: 0 }, // limit inferior (variant underline)
    ["max"]: { args: 0, optArgs: 0 }, // maximum
    ["min"]: { args: 0, optArgs: 0 }, // minimum
    ["sup"]: { args: 0, optArgs: 0 }, // supremum (least upper bound)
    ["inf"]: { args: 0, optArgs: 0 }, // infimum (greatest lower bound)
    ["argmax"]: { args: 0, optArgs: 0 }, // argument of the maximum
    ["argmin"]: { args: 0, optArgs: 0 }, // argument of the minimum

    // Algebra / linear algebra
    ["det"]: { args: 0, optArgs: 0 }, // determinant
    ["deg"]: { args: 0, optArgs: 0 }, // degree (of polynomial)
    ["gcd"]: { args: 0, optArgs: 0 }, // greatest common divisor
    ["lcm"]: { args: 0, optArgs: 0 }, // least common multiple
    ["ker"]: { args: 0, optArgs: 0 }, // kernel (null space)
    ["hom"]: { args: 0, optArgs: 0 }, // homomorphism set
    ["dim"]: { args: 0, optArgs: 0 }, // dimension
    ["arg"]: { args: 0, optArgs: 0 }, // argument (of complex number)
    ["Pr"]: { args: 0, optArgs: 0 }, // probability
    ["tr"]: { args: 0, optArgs: 0 }, // trace (of matrix)
    ["rank"]: { args: 0, optArgs: 0 }, // rank (of matrix)
    ["span"]: { args: 0, optArgs: 0 }, // span (linear)
    ["sgn"]: { args: 0, optArgs: 0 }, // signum / sign function
    ["diag"]: { args: 0, optArgs: 0 }, // diagonal (matrix)

    // Projective / injective limits
    ["injlim"]: { args: 0, optArgs: 0 }, // injective limit (direct limit)
    ["projlim"]: { args: 0, optArgs: 0 }, // projective limit (inverse limit)
    ["varinjlim"]: { args: 0, optArgs: 0 }, // injective limit (variant with arrow)
    ["varprojlim"]: { args: 0, optArgs: 0 }, // projective limit (variant with arrow)

    // Modular arithmetic
    ["bmod"]: { args: 0, optArgs: 0 }, // binary modulo operator (a mod b)
    ["pmod"]: { args: 1, optArgs: 0 }, // parenthesized modulo (mod p)
    ["mod"]: { args: 1, optArgs: 0 }, // modulo with spacing
    ["pod"]: { args: 1, optArgs: 0 }, // parenthesized modulo (no "mod")
};
