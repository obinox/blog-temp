export const operators = {
    // Basic binary operators
    ["pm"]: { args: 0, optArgs: 0, isOp: true }, // ± plus or minus
    ["mp"]: { args: 0, optArgs: 0, isOp: true }, // ∓ minus or plus
    ["times"]: { args: 0, optArgs: 0, isOp: true }, // × multiplication sign
    ["div"]: { args: 0, optArgs: 0, isOp: true }, // ÷ division sign
    ["cdot"]: { args: 0, optArgs: 0, isOp: true }, // ⋅ centered dot (multiplication)
    ["ast"]: { args: 0, optArgs: 0, isOp: true }, // ∗ asterisk operator
    ["star"]: { args: 0, optArgs: 0, isOp: true }, // ⋆ five-pointed star operator
    ["circ"]: { args: 0, optArgs: 0, isOp: true }, // ∘ ring / composition operator
    ["bullet"]: { args: 0, optArgs: 0, isOp: true }, // ∙ bullet dot operator
    ["diamond"]: { args: 0, optArgs: 0, isOp: true }, // ⋄ diamond operator
    ["centerdot"]: { args: 0, optArgs: 0, isOp: true }, // · centered dot (alternate)
    ["intercal"]: { args: 0, optArgs: 0, isOp: true }, // ⊺ intercal (transpose)

    // Circled operators
    ["oplus"]: { args: 0, optArgs: 0, isOp: true }, // ⊕ circled plus (direct sum)
    ["ominus"]: { args: 0, optArgs: 0, isOp: true }, // ⊖ circled minus
    ["otimes"]: { args: 0, optArgs: 0, isOp: true }, // ⊗ circled times (tensor product)
    ["oslash"]: { args: 0, optArgs: 0, isOp: true }, // ⊘ circled slash
    ["odot"]: { args: 0, optArgs: 0, isOp: true }, // ⊙ circled dot
    ["circledast"]: { args: 0, optArgs: 0, isOp: true }, // ⊛ circled asterisk
    ["circledcirc"]: { args: 0, optArgs: 0, isOp: true }, // ⊚ circled circle
    ["circleddash"]: { args: 0, optArgs: 0, isOp: true }, // ⊝ circled dash

    // Boxed operators
    ["boxplus"]: { args: 0, optArgs: 0, isOp: true }, // ⊞ boxed plus
    ["boxminus"]: { args: 0, optArgs: 0, isOp: true }, // ⊟ boxed minus
    ["boxtimes"]: { args: 0, optArgs: 0, isOp: true }, // ⊠ boxed times
    ["boxdot"]: { args: 0, optArgs: 0, isOp: true }, // ⊡ boxed dot
    ["box"]: { args: 0, optArgs: 0, isOp: true }, // □ empty box

    // Logic operators
    ["wedge"]: { args: 0, optArgs: 0, isOp: true }, // ∧ logical AND
    ["vee"]: { args: 0, optArgs: 0, isOp: true }, // ∨ logical OR
    ["land"]: { args: 0, optArgs: 0, isOp: true }, // ∧ logical AND (alias)
    ["lor"]: { args: 0, optArgs: 0, isOp: true }, // ∨ logical OR (alias)
    ["lnot"]: { args: 0, optArgs: 0, isOp: true }, // ¬ logical NOT (alias)
    ["neg"]: { args: 0, optArgs: 0, isOp: true }, // ¬ logical NOT / negation
    ["barwedge"]: { args: 0, optArgs: 0, isOp: true }, // ⊼ bar wedge (NAND)
    ["veebar"]: { args: 0, optArgs: 0, isOp: true }, // ⊻ exclusive OR (XOR)
    ["doublebarwedge"]: { args: 0, optArgs: 0, isOp: true }, // ⩞ double bar wedge
    ["curlyvee"]: { args: 0, optArgs: 0, isOp: true }, // ⋎ curly logical OR
    ["curlywedge"]: { args: 0, optArgs: 0, isOp: true }, // ⋏ curly logical AND

    // Set operators
    ["cap"]: { args: 0, optArgs: 0, isOp: true }, // ∩ intersection
    ["cup"]: { args: 0, optArgs: 0, isOp: true }, // ∪ union
    ["Cap"]: { args: 0, optArgs: 0, isOp: true }, // ⋒ double intersection
    ["Cup"]: { args: 0, optArgs: 0, isOp: true }, // ⋓ double union
    ["sqcap"]: { args: 0, optArgs: 0, isOp: true }, // ⊓ square intersection
    ["sqcup"]: { args: 0, optArgs: 0, isOp: true }, // ⊔ square union
    ["uplus"]: { args: 0, optArgs: 0, isOp: true }, // ⊎ multiset union (union with plus)
    ["setminus"]: { args: 0, optArgs: 0, isOp: true }, // ∖ set difference
    ["smallsetminus"]: { args: 0, optArgs: 0, isOp: true }, // small set difference

    // Product-like operators
    ["ltimes"]: { args: 0, optArgs: 0, isOp: true }, // ⋉ left semidirect product
    ["rtimes"]: { args: 0, optArgs: 0, isOp: true }, // ⋊ right semidirect product
    ["leftthreetimes"]: { args: 0, optArgs: 0, isOp: true }, // ⋋ left three times
    ["rightthreetimes"]: { args: 0, optArgs: 0, isOp: true }, // ⋌ right three times
    ["divideontimes"]: { args: 0, optArgs: 0, isOp: true }, // ⋇ division times
    ["dotplus"]: { args: 0, optArgs: 0, isOp: true }, // ∔ dot plus

    // Dagger / misc binary
    ["dagger"]: { args: 0, optArgs: 0, isOp: true }, // † dagger (adjoint)
    ["ddagger"]: { args: 0, optArgs: 0, isOp: true }, // ‡ double dagger
    ["dag"]: { args: 0, optArgs: 0, isOp: true }, // † dagger (alias)
    ["ddag"]: { args: 0, optArgs: 0, isOp: true }, // ‡ double dagger (alias)
    ["amalg"]: { args: 0, optArgs: 0, isOp: true }, // ⨿ amalgamation (coproduct)
    ["wr"]: { args: 0, optArgs: 0, isOp: true }, // ≀ wreath product

    // Geometric operators
    ["bigtriangleup"]: { args: 0, optArgs: 0, isOp: true }, // △ big triangle up
    ["bigtriangledown"]: { args: 0, optArgs: 0, isOp: true }, // ▽ big triangle down
    ["lhd"]: { args: 0, optArgs: 0, isOp: true }, // ◁ left-pointing triangle (normal subgroup)
    ["rhd"]: { args: 0, optArgs: 0, isOp: true }, // ▷ right-pointing triangle
    ["unlhd"]: { args: 0, optArgs: 0, isOp: true }, // ⊴ left triangle with underbar
    ["unrhd"]: { args: 0, optArgs: 0, isOp: true }, // ⊵ right triangle with underbar

    // Large operators — summation / product
    ["sum"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∑ summation
    ["prod"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∏ product
    ["coprod"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∐ coproduct

    // Large operators — integrals
    ["int"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∫ integral
    ["integral"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∫ integral (alias)
    ["iint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∬ double integral
    ["iiint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∭ triple integral
    ["iiiint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⨌ quadruple integral
    ["oint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∮ contour integral
    ["oiint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∯ surface integral
    ["oiiint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∰ volume integral
    ["intop"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∫ integral with limits placement
    ["smallint"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // small inline integral
    ["ointctrclockwise"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∳ counterclockwise contour integral
    ["ointccw"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∳ counterclockwise contour integral
    ["ointclockwise"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∲ clockwise contour integral
    ["ointcw"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ∲ clockwise contour integral

    // Large set / logic operators
    ["bigvee"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⋁ big logical OR
    ["bigwedge"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⋀ big logical AND
    ["bigcup"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⋃ big union
    ["bigcap"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⋂ big intersection
    ["bigoplus"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⨁ big direct sum
    ["bigotimes"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⨂ big tensor product
    ["bigodot"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⨀ big circled dot
    ["bigsqcup"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⨆ big square union
    ["bigsqcap"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // big square intersection
    ["biguplus"]: { args: 0, optArgs: 0, isOp: true, isLargeOp: true }, // ⨄ big multiset union
};
