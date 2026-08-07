export const functions = {
    // Trigonometric
    ["sin"]: { args: 0, optArgs: 0, isOp: true }, // sine
    ["cos"]: { args: 0, optArgs: 0, isOp: true }, // cosine
    ["tan"]: { args: 0, optArgs: 0, isOp: true }, // tangent
    ["cot"]: { args: 0, optArgs: 0, isOp: true }, // cotangent
    ["sec"]: { args: 0, optArgs: 0, isOp: true }, // secant
    ["csc"]: { args: 0, optArgs: 0, isOp: true }, // cosecant

    // Inverse trigonometric
    ["arcsin"]: { args: 0, optArgs: 0, isOp: true }, // inverse sine
    ["arccos"]: { args: 0, optArgs: 0, isOp: true }, // inverse cosine
    ["arctan"]: { args: 0, optArgs: 0, isOp: true }, // inverse tangent
    ["arccot"]: { args: 0, optArgs: 0, isOp: true }, // inverse cotangent
    ["arcsec"]: { args: 0, optArgs: 0, isOp: true }, // inverse secant
    ["arccsc"]: { args: 0, optArgs: 0, isOp: true }, // inverse cosecant

    // Hyperbolic
    ["sinh"]: { args: 0, optArgs: 0, isOp: true }, // hyperbolic sine
    ["cosh"]: { args: 0, optArgs: 0, isOp: true }, // hyperbolic cosine
    ["tanh"]: { args: 0, optArgs: 0, isOp: true }, // hyperbolic tangent
    ["coth"]: { args: 0, optArgs: 0, isOp: true }, // hyperbolic cotangent
    ["sech"]: { args: 0, optArgs: 0, isOp: true }, // hyperbolic secant
    ["csch"]: { args: 0, optArgs: 0, isOp: true }, // hyperbolic cosecant

    // Logarithmic / exponential
    ["log"]: { args: 0, optArgs: 0, isOp: true }, // logarithm
    ["ln"]: { args: 0, optArgs: 0, isOp: true }, // natural logarithm
    ["lg"]: { args: 0, optArgs: 0, isOp: true }, // common logarithm (base 10)
    ["exp"]: { args: 0, optArgs: 0, isOp: true }, // exponential function

    // Limits / extrema
    ["lim"]: { args: 0, optArgs: 0, isOp: true }, // limit
    ["limsup"]: { args: 0, optArgs: 0, isOp: true }, // limit superior
    ["liminf"]: { args: 0, optArgs: 0, isOp: true }, // limit inferior
    ["varlimsup"]: { args: 0, optArgs: 0, isOp: true }, // limit superior (variant overline)
    ["varliminf"]: { args: 0, optArgs: 0, isOp: true }, // limit inferior (variant underline)
    ["max"]: { args: 0, optArgs: 0, isOp: true }, // maximum
    ["min"]: { args: 0, optArgs: 0, isOp: true }, // minimum
    ["sup"]: { args: 0, optArgs: 0, isOp: true }, // supremum (least upper bound)
    ["inf"]: { args: 0, optArgs: 0, isOp: true }, // infimum (greatest lower bound)
    ["argmax"]: { args: 0, optArgs: 0, isOp: true }, // argument of the maximum
    ["argmin"]: { args: 0, optArgs: 0, isOp: true }, // argument of the minimum

    // Algebra / linear algebra
    ["det"]: { args: 0, optArgs: 0, isOp: true }, // determinant
    ["deg"]: { args: 0, optArgs: 0, isOp: true }, // degree (of polynomial)
    ["gcd"]: { args: 0, optArgs: 0, isOp: true }, // greatest common divisor
    ["lcm"]: { args: 0, optArgs: 0, isOp: true }, // least common multiple
    ["ker"]: { args: 0, optArgs: 0, isOp: true }, // kernel (null space)
    ["hom"]: { args: 0, optArgs: 0, isOp: true }, // homomorphism set
    ["dim"]: { args: 0, optArgs: 0, isOp: true }, // dimension
    ["arg"]: { args: 0, optArgs: 0, isOp: true }, // argument (of complex number)
    ["Pr"]: { args: 0, optArgs: 0, isOp: true }, // probability
    ["tr"]: { args: 0, optArgs: 0, isOp: true }, // trace (of matrix)
    ["rank"]: { args: 0, optArgs: 0, isOp: true }, // rank (of matrix)
    ["span"]: { args: 0, optArgs: 0, isOp: true }, // span (linear)
    ["sgn"]: { args: 0, optArgs: 0, isOp: true }, // signum / sign function
    ["diag"]: { args: 0, optArgs: 0, isOp: true }, // diagonal (matrix)

    // Projective / injective limits
    ["injlim"]: { args: 0, optArgs: 0, isOp: true }, // injective limit (direct limit)
    ["projlim"]: { args: 0, optArgs: 0, isOp: true }, // projective limit (inverse limit)
    ["varinjlim"]: { args: 0, optArgs: 0, isOp: true }, // injective limit (variant with arrow)
    ["varprojlim"]: { args: 0, optArgs: 0, isOp: true }, // projective limit (variant with arrow)

    // Modular arithmetic
    ["bmod"]: { args: 0, optArgs: 0, isOp: true }, // binary modulo operator (a mod b)
    ["pmod"]: { args: 1, optArgs: 0, isOp: true }, // parenthesized modulo (mod p)
    ["mod"]: { args: 1, optArgs: 0, isOp: true }, // modulo with spacing
    ["pod"]: { args: 1, optArgs: 0, isOp: true }, // parenthesized modulo (no "mod")
};
