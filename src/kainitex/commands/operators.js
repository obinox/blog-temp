export const operators = {
    // Basic binary operators
    ["pm"]: { args: 0, optArgs: 0 }, // ± plus or minus
    ["mp"]: { args: 0, optArgs: 0 }, // ∓ minus or plus
    ["times"]: { args: 0, optArgs: 0 }, // × multiplication sign
    ["div"]: { args: 0, optArgs: 0 }, // ÷ division sign
    ["cdot"]: { args: 0, optArgs: 0 }, // ⋅ centered dot (multiplication)
    ["ast"]: { args: 0, optArgs: 0 }, // ∗ asterisk operator
    ["star"]: { args: 0, optArgs: 0 }, // ⋆ five-pointed star operator
    ["circ"]: { args: 0, optArgs: 0 }, // ∘ ring / composition operator
    ["bullet"]: { args: 0, optArgs: 0 }, // ∙ bullet dot operator
    ["diamond"]: { args: 0, optArgs: 0 }, // ⋄ diamond operator
    ["centerdot"]: { args: 0, optArgs: 0 }, // · centered dot (alternate)
    ["intercal"]: { args: 0, optArgs: 0 }, // ⊺ intercal (transpose)

    // Circled operators
    ["oplus"]: { args: 0, optArgs: 0 }, // ⊕ circled plus (direct sum)
    ["ominus"]: { args: 0, optArgs: 0 }, // ⊖ circled minus
    ["otimes"]: { args: 0, optArgs: 0 }, // ⊗ circled times (tensor product)
    ["oslash"]: { args: 0, optArgs: 0 }, // ⊘ circled slash
    ["odot"]: { args: 0, optArgs: 0 }, // ⊙ circled dot
    ["circledast"]: { args: 0, optArgs: 0 }, // ⊛ circled asterisk
    ["circledcirc"]: { args: 0, optArgs: 0 }, // ⊚ circled circle
    ["circleddash"]: { args: 0, optArgs: 0 }, // ⊝ circled dash

    // Boxed operators
    ["boxplus"]: { args: 0, optArgs: 0 }, // ⊞ boxed plus
    ["boxminus"]: { args: 0, optArgs: 0 }, // ⊟ boxed minus
    ["boxtimes"]: { args: 0, optArgs: 0 }, // ⊠ boxed times
    ["boxdot"]: { args: 0, optArgs: 0 }, // ⊡ boxed dot
    ["box"]: { args: 0, optArgs: 0 }, // □ empty box

    // Logic operators
    ["wedge"]: { args: 0, optArgs: 0 }, // ∧ logical AND
    ["vee"]: { args: 0, optArgs: 0 }, // ∨ logical OR
    ["land"]: { args: 0, optArgs: 0 }, // ∧ logical AND (alias)
    ["lor"]: { args: 0, optArgs: 0 }, // ∨ logical OR (alias)
    ["lnot"]: { args: 0, optArgs: 0 }, // ¬ logical NOT (alias)
    ["neg"]: { args: 0, optArgs: 0 }, // ¬ logical NOT / negation
    ["barwedge"]: { args: 0, optArgs: 0 }, // ⊼ bar wedge (NAND)
    ["veebar"]: { args: 0, optArgs: 0 }, // ⊻ exclusive OR (XOR)
    ["doublebarwedge"]: { args: 0, optArgs: 0 }, // ⩞ double bar wedge
    ["curlyvee"]: { args: 0, optArgs: 0 }, // ⋎ curly logical OR
    ["curlywedge"]: { args: 0, optArgs: 0 }, // ⋏ curly logical AND

    // Set operators
    ["cap"]: { args: 0, optArgs: 0 }, // ∩ intersection
    ["cup"]: { args: 0, optArgs: 0 }, // ∪ union
    ["Cap"]: { args: 0, optArgs: 0 }, // ⋒ double intersection
    ["Cup"]: { args: 0, optArgs: 0 }, // ⋓ double union
    ["sqcap"]: { args: 0, optArgs: 0 }, // ⊓ square intersection
    ["sqcup"]: { args: 0, optArgs: 0 }, // ⊔ square union
    ["uplus"]: { args: 0, optArgs: 0 }, // ⊎ multiset union (union with plus)
    ["setminus"]: { args: 0, optArgs: 0 }, // ∖ set difference
    ["smallsetminus"]: { args: 0, optArgs: 0 }, // small set difference

    // Product-like operators
    ["ltimes"]: { args: 0, optArgs: 0 }, // ⋉ left semidirect product
    ["rtimes"]: { args: 0, optArgs: 0 }, // ⋊ right semidirect product
    ["leftthreetimes"]: { args: 0, optArgs: 0 }, // ⋋ left three times
    ["rightthreetimes"]: { args: 0, optArgs: 0 }, // ⋌ right three times
    ["divideontimes"]: { args: 0, optArgs: 0 }, // ⋇ division times
    ["dotplus"]: { args: 0, optArgs: 0 }, // ∔ dot plus

    // Dagger / misc binary
    ["dagger"]: { args: 0, optArgs: 0 }, // † dagger (adjoint)
    ["ddagger"]: { args: 0, optArgs: 0 }, // ‡ double dagger
    ["dag"]: { args: 0, optArgs: 0 }, // † dagger (alias)
    ["ddag"]: { args: 0, optArgs: 0 }, // ‡ double dagger (alias)
    ["amalg"]: { args: 0, optArgs: 0 }, // ⨿ amalgamation (coproduct)
    ["wr"]: { args: 0, optArgs: 0 }, // ≀ wreath product

    // Geometric operators
    ["bigtriangleup"]: { args: 0, optArgs: 0 }, // △ big triangle up
    ["bigtriangledown"]: { args: 0, optArgs: 0 }, // ▽ big triangle down
    ["lhd"]: { args: 0, optArgs: 0 }, // ◁ left-pointing triangle (normal subgroup)
    ["rhd"]: { args: 0, optArgs: 0 }, // ▷ right-pointing triangle
    ["unlhd"]: { args: 0, optArgs: 0 }, // ⊴ left triangle with underbar
    ["unrhd"]: { args: 0, optArgs: 0 }, // ⊵ right triangle with underbar

    // Large operators — summation / product
    ["sum"]: { args: 0, optArgs: 0 }, // ∑ summation
    ["prod"]: { args: 0, optArgs: 0 }, // ∏ product
    ["coprod"]: { args: 0, optArgs: 0 }, // ∐ coproduct

    // Large operators — integrals
    ["int"]: { args: 0, optArgs: 0 }, // ∫ integral
    ["integral"]: { args: 0, optArgs: 0 }, // ∫ integral (alias)
    ["iint"]: { args: 0, optArgs: 0 }, // ∬ double integral
    ["iiint"]: { args: 0, optArgs: 0 }, // ∭ triple integral
    ["iiiint"]: { args: 0, optArgs: 0 }, // ⨌ quadruple integral
    ["oint"]: { args: 0, optArgs: 0 }, // ∮ contour integral
    ["oiint"]: { args: 0, optArgs: 0 }, // ∯ surface integral
    ["oiiint"]: { args: 0, optArgs: 0 }, // ∰ volume integral
    ["intop"]: { args: 0, optArgs: 0 }, // ∫ integral with limits placement
    ["smallint"]: { args: 0, optArgs: 0 }, // small inline integral
    ["ointctrclockwise"]: { args: 0, optArgs: 0 }, // ∳ counterclockwise contour integral
    ["ointclockwise"]: { args: 0, optArgs: 0 }, // ∲ clockwise contour integral

    // Large set / logic operators
    ["bigvee"]: { args: 0, optArgs: 0 }, // ⋁ big logical OR
    ["bigwedge"]: { args: 0, optArgs: 0 }, // ⋀ big logical AND
    ["bigcup"]: { args: 0, optArgs: 0 }, // ⋃ big union
    ["bigcap"]: { args: 0, optArgs: 0 }, // ⋂ big intersection
    ["bigoplus"]: { args: 0, optArgs: 0 }, // ⨁ big direct sum
    ["bigotimes"]: { args: 0, optArgs: 0 }, // ⨂ big tensor product
    ["bigodot"]: { args: 0, optArgs: 0 }, // ⨀ big circled dot
    ["bigsqcup"]: { args: 0, optArgs: 0 }, // ⨆ big square union
    ["bigsqcap"]: { args: 0, optArgs: 0 }, // big square intersection
    ["biguplus"]: { args: 0, optArgs: 0 }, // ⨄ big multiset union
};
