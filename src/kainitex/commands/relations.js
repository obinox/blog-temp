export const relations = {
    // Basic comparisons
    ["leq"]: { args: 0, optArgs: 0, isOp: true }, // ≤ less than or equal
    ["geq"]: { args: 0, optArgs: 0, isOp: true }, // ≥ greater than or equal
    ["neq"]: { args: 0, optArgs: 0, isOp: true }, // ≠ not equal
    ["ll"]: { args: 0, optArgs: 0, isOp: true }, // ≪ much less than
    ["gg"]: { args: 0, optArgs: 0, isOp: true }, // ≫ much greater than
    ["lll"]: { args: 0, optArgs: 0, isOp: true }, // ⋘ very much less than
    ["ggg"]: { args: 0, optArgs: 0, isOp: true }, // ⋙ very much greater than
    ["leqq"]: { args: 0, optArgs: 0, isOp: true }, // ≦ less than or equal (double bar)
    ["geqq"]: { args: 0, optArgs: 0, isOp: true }, // ≧ greater than or equal (double bar)
    ["leqslant"]: { args: 0, optArgs: 0, isOp: true }, // ⩽ less than or slanted equal
    ["geqslant"]: { args: 0, optArgs: 0, isOp: true }, // ⩾ greater than or slanted equal
    ["lessgtr"]: { args: 0, optArgs: 0, isOp: true }, // ≶ less than or greater than
    ["gtrless"]: { args: 0, optArgs: 0, isOp: true }, // ≷ greater than or less than
    ["lesseqgtr"]: { args: 0, optArgs: 0, isOp: true }, // ⋚ less than, equal, or greater than
    ["gtreqless"]: { args: 0, optArgs: 0, isOp: true }, // ⋛ greater than, equal, or less than

    // Similarity / approximation
    ["approx"]: { args: 0, optArgs: 0, isOp: true }, // ≈ approximately equal
    ["approxeq"]: { args: 0, optArgs: 0, isOp: true }, // ≊ approximately equal (with eq)
    ["sim"]: { args: 0, optArgs: 0, isOp: true }, // ∼ similar to
    ["simeq"]: { args: 0, optArgs: 0, isOp: true }, // ≃ similar or equal
    ["equiv"]: { args: 0, optArgs: 0, isOp: true }, // ≡ identical / congruent
    ["cong"]: { args: 0, optArgs: 0, isOp: true }, // ≅ congruent (isomorphic)
    ["asymp"]: { args: 0, optArgs: 0, isOp: true }, // ≍ asymptotically equal
    ["doteq"]: { args: 0, optArgs: 0, isOp: true }, // ≐ approaches the limit
    ["doteqdot"]: { args: 0, optArgs: 0, isOp: true }, // ≑ geometrically equal
    ["eqcirc"]: { args: 0, optArgs: 0, isOp: true }, // ≖ equal with circle
    ["circeq"]: { args: 0, optArgs: 0, isOp: true }, // ≗ circle on equals
    ["bumpeq"]: { args: 0, optArgs: 0, isOp: true }, // ≏ bump equals
    ["Bumpeq"]: { args: 0, optArgs: 0, isOp: true }, // ≎ geometrically equivalent
    ["lesssim"]: { args: 0, optArgs: 0, isOp: true }, // ≲ less than or similar
    ["gtrsim"]: { args: 0, optArgs: 0, isOp: true }, // ≳ greater than or similar
    ["lessapprox"]: { args: 0, optArgs: 0, isOp: true }, // ⪅ less than or approx
    ["gtrapprox"]: { args: 0, optArgs: 0, isOp: true }, // ⪆ greater than or approx

    // Set relations
    ["subset"]: { args: 0, optArgs: 0, isOp: true }, // ⊂ proper subset
    ["supset"]: { args: 0, optArgs: 0, isOp: true }, // ⊃ proper superset
    ["subseteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊆ subset or equal
    ["supseteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊇ superset or equal
    ["subseteqq"]: { args: 0, optArgs: 0, isOp: true }, // ⫅ subset or equal (double bar)
    ["supseteqq"]: { args: 0, optArgs: 0, isOp: true }, // ⫆ superset or equal (double bar)
    ["Subset"]: { args: 0, optArgs: 0, isOp: true }, // ⋐ double subset
    ["Supset"]: { args: 0, optArgs: 0, isOp: true }, // ⋑ double superset
    ["sqsubset"]: { args: 0, optArgs: 0, isOp: true }, // ⊏ square subset
    ["sqsupset"]: { args: 0, optArgs: 0, isOp: true }, // ⊐ square superset
    ["sqsubseteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊑ square subset or equal
    ["sqsupseteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊒ square superset or equal
    ["in"]: { args: 0, optArgs: 0, isOp: true }, // ∈ element of
    ["notin"]: { args: 0, optArgs: 0, isOp: true }, // ∉ not element of
    ["ni"]: { args: 0, optArgs: 0, isOp: true }, // ∋ contains as member

    // Order relations
    ["prec"]: { args: 0, optArgs: 0, isOp: true }, // ≺ precedes
    ["succ"]: { args: 0, optArgs: 0, isOp: true }, // ≻ succeeds
    ["preceq"]: { args: 0, optArgs: 0, isOp: true }, // ⪯ precedes or equals
    ["succeq"]: { args: 0, optArgs: 0, isOp: true }, // ⪰ succeeds or equals
    ["precsim"]: { args: 0, optArgs: 0, isOp: true }, // ≾ precedes or similar
    ["succsim"]: { args: 0, optArgs: 0, isOp: true }, // ≿ succeeds or similar
    ["precapprox"]: { args: 0, optArgs: 0, isOp: true }, // ⪷ precedes or approx
    ["succapprox"]: { args: 0, optArgs: 0, isOp: true }, // ⪸ succeeds or approx
    ["preccurlyeq"]: { args: 0, optArgs: 0, isOp: true }, // ≼ precedes or curly equals
    ["succcurlyeq"]: { args: 0, optArgs: 0, isOp: true }, // ≽ succeeds or curly equals
    ["curlyeqprec"]: { args: 0, optArgs: 0, isOp: true }, // ⋞ curly equals or precedes
    ["curlyeqsucc"]: { args: 0, optArgs: 0, isOp: true }, // ⋟ curly equals or succeeds

    // Proportionality / perpendicularity
    ["propto"]: { args: 0, optArgs: 0, isOp: true }, // ∝ proportional to
    ["varpropto"]: { args: 0, optArgs: 0, isOp: true }, // ∝ proportional to (variant)
    ["perp"]: { args: 0, optArgs: 0, isOp: true }, // ⊥ perpendicular
    ["mid"]: { args: 0, optArgs: 0, isOp: true }, // ∣ divides / vertical bar
    ["parallel"]: { args: 0, optArgs: 0, isOp: true }, // ∥ parallel
    ["shortmid"]: { args: 0, optArgs: 0, isOp: true }, // short divides
    ["shortparallel"]: { args: 0, optArgs: 0, isOp: true }, // short parallel
    ["between"]: { args: 0, optArgs: 0, isOp: true }, // ≬ between
    ["pitchfork"]: { args: 0, optArgs: 0, isOp: true }, // ⋔ pitchfork (transversal intersection)
    ["backepsilon"]: { args: 0, optArgs: 0, isOp: true }, // ∍ reversed epsilon (such that)

    // Turnstile relations
    ["vdash"]: { args: 0, optArgs: 0, isOp: true }, // ⊢ proves / entails
    ["dashv"]: { args: 0, optArgs: 0, isOp: true }, // ⊣ is proved by
    ["Vdash"]: { args: 0, optArgs: 0, isOp: true }, // ⊩ forces (double turnstile)
    ["vDash"]: { args: 0, optArgs: 0, isOp: true }, // ⊨ models / satisfies
    ["Vvdash"]: { args: 0, optArgs: 0, isOp: true }, // ⊪ triple vertical turnstile
    ["models"]: { args: 0, optArgs: 0, isOp: true }, // ⊧ models (semantic consequence)

    // Geometric / face relations
    ["smile"]: { args: 0, optArgs: 0, isOp: true }, // ⌣ smile (arc relation)
    ["frown"]: { args: 0, optArgs: 0, isOp: true }, // ⌢ frown (arc relation)
    ["bowtie"]: { args: 0, optArgs: 0, isOp: true }, // ⋈ bowtie (natural join)
    ["Join"]: { args: 0, optArgs: 0, isOp: true }, // ⋈ join (relational algebra)

    // Triangle relations
    ["triangleleft"]: { args: 0, optArgs: 0, isOp: true }, // ◁ left triangle (normal subgroup)
    ["triangleright"]: { args: 0, optArgs: 0, isOp: true }, // ▷ right triangle
    ["trianglelefteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊴ left triangle or equal
    ["trianglerighteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊵ right triangle or equal

    // Logical relations
    ["impliedby"]: { args: 0, optArgs: 0, isOp: true }, // ⟸ implied by
    ["implies"]: { args: 0, optArgs: 0, isOp: true }, // ⟹ implies
    ["iff"]: { args: 0, optArgs: 0, isOp: true }, // ⟺ if and only if

    // Aliases
    ["le"]: { args: 0, optArgs: 0, isOp: true }, // ≤ alias for \leq
    ["ge"]: { args: 0, optArgs: 0, isOp: true }, // ≥ alias for \geq
    ["ne"]: { args: 0, optArgs: 0, isOp: true }, // ≠ alias for \neq
    ["owns"]: { args: 0, optArgs: 0, isOp: true }, // ∋ alias for \ni

    // Negated comparisons
    ["nleq"]: { args: 0, optArgs: 0, isOp: true }, // ≰ not less than or equal
    ["ngeq"]: { args: 0, optArgs: 0, isOp: true }, // ≱ not greater than or equal
    ["nleqq"]: { args: 0, optArgs: 0, isOp: true }, // negated ≦
    ["ngeqq"]: { args: 0, optArgs: 0, isOp: true }, // negated ≧
    ["nleqslant"]: { args: 0, optArgs: 0, isOp: true }, // negated ⩽
    ["ngeqslant"]: { args: 0, optArgs: 0, isOp: true }, // negated ⩾
    ["nless"]: { args: 0, optArgs: 0, isOp: true }, // ≮ not less than
    ["ngtr"]: { args: 0, optArgs: 0, isOp: true }, // ≯ not greater than

    // Negated set relations
    ["nsubseteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊈ not subset or equal
    ["nsupseteq"]: { args: 0, optArgs: 0, isOp: true }, // ⊉ not superset or equal
    ["nsubseteqq"]: { args: 0, optArgs: 0, isOp: true }, // negated ⫅
    ["nsupseteqq"]: { args: 0, optArgs: 0, isOp: true }, // negated ⫆
    ["subsetneq"]: { args: 0, optArgs: 0, isOp: true }, // ⊊ proper subset (strict)
    ["supsetneq"]: { args: 0, optArgs: 0, isOp: true }, // ⊋ proper superset (strict)
    ["subsetneqq"]: { args: 0, optArgs: 0, isOp: true }, // ⫋ strict subset (double bar)
    ["supsetneqq"]: { args: 0, optArgs: 0, isOp: true }, // ⫌ strict superset (double bar)

    // Negated order relations
    ["nprec"]: { args: 0, optArgs: 0, isOp: true }, // ⊀ does not precede
    ["nsucc"]: { args: 0, optArgs: 0, isOp: true }, // ⊁ does not succeed
    ["npreceq"]: { args: 0, optArgs: 0, isOp: true }, // negated ⪯
    ["nsucceq"]: { args: 0, optArgs: 0, isOp: true }, // negated ⪰
    ["precneqq"]: { args: 0, optArgs: 0, isOp: true }, // ⪵ precedes but not equal
    ["succneqq"]: { args: 0, optArgs: 0, isOp: true }, // ⪶ succeeds but not equal
    ["precnsim"]: { args: 0, optArgs: 0, isOp: true }, // ⋨ precedes but not similar
    ["succnsim"]: { args: 0, optArgs: 0, isOp: true }, // ⋩ succeeds but not similar

    // Negated similarity
    ["ncong"]: { args: 0, optArgs: 0, isOp: true }, // ≇ not congruent
    ["nsim"]: { args: 0, optArgs: 0, isOp: true }, // ≁ not similar

    // Negated divisibility / parallelism
    ["nmid"]: { args: 0, optArgs: 0, isOp: true }, // ∤ does not divide
    ["nparallel"]: { args: 0, optArgs: 0, isOp: true }, // ∦ not parallel
    ["nshortmid"]: { args: 0, optArgs: 0, isOp: true }, // negated short mid
    ["nshortparallel"]: { args: 0, optArgs: 0, isOp: true }, // negated short parallel

    // Negated turnstile
    ["nvdash"]: { args: 0, optArgs: 0, isOp: true }, // ⊬ does not prove
    ["nvDash"]: { args: 0, optArgs: 0, isOp: true }, // ⊭ does not model
    ["nVdash"]: { args: 0, optArgs: 0, isOp: true }, // ⊮ does not force
    ["nVDash"]: { args: 0, optArgs: 0, isOp: true }, // ⊯ negated double turnstile

    // Negated triangle relations
    ["ntriangleleft"]: { args: 0, optArgs: 0, isOp: true }, // ⋪ not left triangle
    ["ntriangleright"]: { args: 0, optArgs: 0, isOp: true }, // ⋫ not right triangle
    ["ntrianglelefteq"]: { args: 0, optArgs: 0, isOp: true }, // ⋬ not left triangle or equal
    ["ntrianglerighteq"]: { args: 0, optArgs: 0, isOp: true }, // ⋭ not right triangle or equal

    // Colon relations (colonequals)
    ["coloneq"]: { args: 0, optArgs: 0, isOp: true }, // ≔ colon equals (definition)
    ["Coloneq"]: { args: 0, optArgs: 0, isOp: true }, // ⩴ double colon equals
    ["coloneqq"]: { args: 0, optArgs: 0, isOp: true }, // ≔ colon double equals
    ["Coloneqq"]: { args: 0, optArgs: 0, isOp: true }, // ⩴ double colon double equals
    ["eqcolon"]: { args: 0, optArgs: 0, isOp: true }, // ≕ equals colon
    ["Eqcolon"]: { args: 0, optArgs: 0, isOp: true }, // equals double colon
    ["colonapprox"]: { args: 0, optArgs: 0, isOp: true }, // colon approx
    ["Colonapprox"]: { args: 0, optArgs: 0, isOp: true }, // double colon approx
    ["colonsim"]: { args: 0, optArgs: 0, isOp: true }, // colon similar
    ["Colonsim"]: { args: 0, optArgs: 0, isOp: true }, // double colon similar
    ["ratio"]: { args: 0, optArgs: 0, isOp: true }, // ∶ ratio
    ["coloncolon"]: { args: 0, optArgs: 0, isOp: true }, // ∷ proportion (double colon)
    ["coloncoloneq"]: { args: 0, optArgs: 0, isOp: true }, // double colon equals
    ["coloncoloneqq"]: { args: 0, optArgs: 0, isOp: true }, // double colon double equals
    ["equalscolon"]: { args: 0, optArgs: 0, isOp: true }, // equals colon (alias)
    ["equalscoloncolon"]: { args: 0, optArgs: 0, isOp: true }, // equals double colon
};
