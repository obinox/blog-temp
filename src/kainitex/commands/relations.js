export const relations = {
    // Basic comparisons
    ["leq"]: { args: 0, optArgs: 0 }, // ≤ less than or equal
    ["geq"]: { args: 0, optArgs: 0 }, // ≥ greater than or equal
    ["neq"]: { args: 0, optArgs: 0 }, // ≠ not equal
    ["ll"]: { args: 0, optArgs: 0 }, // ≪ much less than
    ["gg"]: { args: 0, optArgs: 0 }, // ≫ much greater than
    ["lll"]: { args: 0, optArgs: 0 }, // ⋘ very much less than
    ["ggg"]: { args: 0, optArgs: 0 }, // ⋙ very much greater than
    ["leqq"]: { args: 0, optArgs: 0 }, // ≦ less than or equal (double bar)
    ["geqq"]: { args: 0, optArgs: 0 }, // ≧ greater than or equal (double bar)
    ["leqslant"]: { args: 0, optArgs: 0 }, // ⩽ less than or slanted equal
    ["geqslant"]: { args: 0, optArgs: 0 }, // ⩾ greater than or slanted equal
    ["lessgtr"]: { args: 0, optArgs: 0 }, // ≶ less than or greater than
    ["gtrless"]: { args: 0, optArgs: 0 }, // ≷ greater than or less than
    ["lesseqgtr"]: { args: 0, optArgs: 0 }, // ⋚ less than, equal, or greater than
    ["gtreqless"]: { args: 0, optArgs: 0 }, // ⋛ greater than, equal, or less than

    // Similarity / approximation
    ["approx"]: { args: 0, optArgs: 0 }, // ≈ approximately equal
    ["approxeq"]: { args: 0, optArgs: 0 }, // ≊ approximately equal (with eq)
    ["sim"]: { args: 0, optArgs: 0 }, // ∼ similar to
    ["simeq"]: { args: 0, optArgs: 0 }, // ≃ similar or equal
    ["equiv"]: { args: 0, optArgs: 0 }, // ≡ identical / congruent
    ["cong"]: { args: 0, optArgs: 0 }, // ≅ congruent (isomorphic)
    ["asymp"]: { args: 0, optArgs: 0 }, // ≍ asymptotically equal
    ["doteq"]: { args: 0, optArgs: 0 }, // ≐ approaches the limit
    ["doteqdot"]: { args: 0, optArgs: 0 }, // ≑ geometrically equal
    ["eqcirc"]: { args: 0, optArgs: 0 }, // ≖ equal with circle
    ["circeq"]: { args: 0, optArgs: 0 }, // ≗ circle on equals
    ["bumpeq"]: { args: 0, optArgs: 0 }, // ≏ bump equals
    ["Bumpeq"]: { args: 0, optArgs: 0 }, // ≎ geometrically equivalent
    ["lesssim"]: { args: 0, optArgs: 0 }, // ≲ less than or similar
    ["gtrsim"]: { args: 0, optArgs: 0 }, // ≳ greater than or similar
    ["lessapprox"]: { args: 0, optArgs: 0 }, // ⪅ less than or approx
    ["gtrapprox"]: { args: 0, optArgs: 0 }, // ⪆ greater than or approx

    // Set relations
    ["subset"]: { args: 0, optArgs: 0 }, // ⊂ proper subset
    ["supset"]: { args: 0, optArgs: 0 }, // ⊃ proper superset
    ["subseteq"]: { args: 0, optArgs: 0 }, // ⊆ subset or equal
    ["supseteq"]: { args: 0, optArgs: 0 }, // ⊇ superset or equal
    ["subseteqq"]: { args: 0, optArgs: 0 }, // ⫅ subset or equal (double bar)
    ["supseteqq"]: { args: 0, optArgs: 0 }, // ⫆ superset or equal (double bar)
    ["Subset"]: { args: 0, optArgs: 0 }, // ⋐ double subset
    ["Supset"]: { args: 0, optArgs: 0 }, // ⋑ double superset
    ["sqsubset"]: { args: 0, optArgs: 0 }, // ⊏ square subset
    ["sqsupset"]: { args: 0, optArgs: 0 }, // ⊐ square superset
    ["sqsubseteq"]: { args: 0, optArgs: 0 }, // ⊑ square subset or equal
    ["sqsupseteq"]: { args: 0, optArgs: 0 }, // ⊒ square superset or equal
    ["in"]: { args: 0, optArgs: 0 }, // ∈ element of
    ["notin"]: { args: 0, optArgs: 0 }, // ∉ not element of
    ["ni"]: { args: 0, optArgs: 0 }, // ∋ contains as member

    // Order relations
    ["prec"]: { args: 0, optArgs: 0 }, // ≺ precedes
    ["succ"]: { args: 0, optArgs: 0 }, // ≻ succeeds
    ["preceq"]: { args: 0, optArgs: 0 }, // ⪯ precedes or equals
    ["succeq"]: { args: 0, optArgs: 0 }, // ⪰ succeeds or equals
    ["precsim"]: { args: 0, optArgs: 0 }, // ≾ precedes or similar
    ["succsim"]: { args: 0, optArgs: 0 }, // ≿ succeeds or similar
    ["precapprox"]: { args: 0, optArgs: 0 }, // ⪷ precedes or approx
    ["succapprox"]: { args: 0, optArgs: 0 }, // ⪸ succeeds or approx
    ["preccurlyeq"]: { args: 0, optArgs: 0 }, // ≼ precedes or curly equals
    ["succcurlyeq"]: { args: 0, optArgs: 0 }, // ≽ succeeds or curly equals
    ["curlyeqprec"]: { args: 0, optArgs: 0 }, // ⋞ curly equals or precedes
    ["curlyeqsucc"]: { args: 0, optArgs: 0 }, // ⋟ curly equals or succeeds

    // Proportionality / perpendicularity
    ["propto"]: { args: 0, optArgs: 0 }, // ∝ proportional to
    ["varpropto"]: { args: 0, optArgs: 0 }, // ∝ proportional to (variant)
    ["perp"]: { args: 0, optArgs: 0 }, // ⊥ perpendicular
    ["mid"]: { args: 0, optArgs: 0 }, // ∣ divides / vertical bar
    ["parallel"]: { args: 0, optArgs: 0 }, // ∥ parallel
    ["shortmid"]: { args: 0, optArgs: 0 }, // short divides
    ["shortparallel"]: { args: 0, optArgs: 0 }, // short parallel
    ["between"]: { args: 0, optArgs: 0 }, // ≬ between
    ["pitchfork"]: { args: 0, optArgs: 0 }, // ⋔ pitchfork (transversal intersection)
    ["backepsilon"]: { args: 0, optArgs: 0 }, // ∍ reversed epsilon (such that)

    // Turnstile relations
    ["vdash"]: { args: 0, optArgs: 0 }, // ⊢ proves / entails
    ["dashv"]: { args: 0, optArgs: 0 }, // ⊣ is proved by
    ["Vdash"]: { args: 0, optArgs: 0 }, // ⊩ forces (double turnstile)
    ["vDash"]: { args: 0, optArgs: 0 }, // ⊨ models / satisfies
    ["Vvdash"]: { args: 0, optArgs: 0 }, // ⊪ triple vertical turnstile
    ["models"]: { args: 0, optArgs: 0 }, // ⊧ models (semantic consequence)

    // Geometric / face relations
    ["smile"]: { args: 0, optArgs: 0 }, // ⌣ smile (arc relation)
    ["frown"]: { args: 0, optArgs: 0 }, // ⌢ frown (arc relation)
    ["bowtie"]: { args: 0, optArgs: 0 }, // ⋈ bowtie (natural join)
    ["Join"]: { args: 0, optArgs: 0 }, // ⋈ join (relational algebra)

    // Triangle relations
    ["triangleleft"]: { args: 0, optArgs: 0 }, // ◁ left triangle (normal subgroup)
    ["triangleright"]: { args: 0, optArgs: 0 }, // ▷ right triangle
    ["trianglelefteq"]: { args: 0, optArgs: 0 }, // ⊴ left triangle or equal
    ["trianglerighteq"]: { args: 0, optArgs: 0 }, // ⊵ right triangle or equal

    // Logical relations
    ["impliedby"]: { args: 0, optArgs: 0 }, // ⟸ implied by
    ["implies"]: { args: 0, optArgs: 0 }, // ⟹ implies
    ["iff"]: { args: 0, optArgs: 0 }, // ⟺ if and only if

    // Aliases
    ["le"]: { args: 0, optArgs: 0 }, // ≤ alias for \leq
    ["ge"]: { args: 0, optArgs: 0 }, // ≥ alias for \geq
    ["ne"]: { args: 0, optArgs: 0 }, // ≠ alias for \neq
    ["owns"]: { args: 0, optArgs: 0 }, // ∋ alias for \ni

    // Negated comparisons
    ["nleq"]: { args: 0, optArgs: 0 }, // ≰ not less than or equal
    ["ngeq"]: { args: 0, optArgs: 0 }, // ≱ not greater than or equal
    ["nleqq"]: { args: 0, optArgs: 0 }, // negated ≦
    ["ngeqq"]: { args: 0, optArgs: 0 }, // negated ≧
    ["nleqslant"]: { args: 0, optArgs: 0 }, // negated ⩽
    ["ngeqslant"]: { args: 0, optArgs: 0 }, // negated ⩾
    ["nless"]: { args: 0, optArgs: 0 }, // ≮ not less than
    ["ngtr"]: { args: 0, optArgs: 0 }, // ≯ not greater than

    // Negated set relations
    ["nsubseteq"]: { args: 0, optArgs: 0 }, // ⊈ not subset or equal
    ["nsupseteq"]: { args: 0, optArgs: 0 }, // ⊉ not superset or equal
    ["nsubseteqq"]: { args: 0, optArgs: 0 }, // negated ⫅
    ["nsupseteqq"]: { args: 0, optArgs: 0 }, // negated ⫆
    ["subsetneq"]: { args: 0, optArgs: 0 }, // ⊊ proper subset (strict)
    ["supsetneq"]: { args: 0, optArgs: 0 }, // ⊋ proper superset (strict)
    ["subsetneqq"]: { args: 0, optArgs: 0 }, // ⫋ strict subset (double bar)
    ["supsetneqq"]: { args: 0, optArgs: 0 }, // ⫌ strict superset (double bar)

    // Negated order relations
    ["nprec"]: { args: 0, optArgs: 0 }, // ⊀ does not precede
    ["nsucc"]: { args: 0, optArgs: 0 }, // ⊁ does not succeed
    ["npreceq"]: { args: 0, optArgs: 0 }, // negated ⪯
    ["nsucceq"]: { args: 0, optArgs: 0 }, // negated ⪰
    ["precneqq"]: { args: 0, optArgs: 0 }, // ⪵ precedes but not equal
    ["succneqq"]: { args: 0, optArgs: 0 }, // ⪶ succeeds but not equal
    ["precnsim"]: { args: 0, optArgs: 0 }, // ⋨ precedes but not similar
    ["succnsim"]: { args: 0, optArgs: 0 }, // ⋩ succeeds but not similar

    // Negated similarity
    ["ncong"]: { args: 0, optArgs: 0 }, // ≇ not congruent
    ["nsim"]: { args: 0, optArgs: 0 }, // ≁ not similar

    // Negated divisibility / parallelism
    ["nmid"]: { args: 0, optArgs: 0 }, // ∤ does not divide
    ["nparallel"]: { args: 0, optArgs: 0 }, // ∦ not parallel
    ["nshortmid"]: { args: 0, optArgs: 0 }, // negated short mid
    ["nshortparallel"]: { args: 0, optArgs: 0 }, // negated short parallel

    // Negated turnstile
    ["nvdash"]: { args: 0, optArgs: 0 }, // ⊬ does not prove
    ["nvDash"]: { args: 0, optArgs: 0 }, // ⊭ does not model
    ["nVdash"]: { args: 0, optArgs: 0 }, // ⊮ does not force
    ["nVDash"]: { args: 0, optArgs: 0 }, // ⊯ negated double turnstile

    // Negated triangle relations
    ["ntriangleleft"]: { args: 0, optArgs: 0 }, // ⋪ not left triangle
    ["ntriangleright"]: { args: 0, optArgs: 0 }, // ⋫ not right triangle
    ["ntrianglelefteq"]: { args: 0, optArgs: 0 }, // ⋬ not left triangle or equal
    ["ntrianglerighteq"]: { args: 0, optArgs: 0 }, // ⋭ not right triangle or equal

    // Colon relations (colonequals)
    ["coloneq"]: { args: 0, optArgs: 0 }, // ≔ colon equals (definition)
    ["Coloneq"]: { args: 0, optArgs: 0 }, // ⩴ double colon equals
    ["coloneqq"]: { args: 0, optArgs: 0 }, // ≔ colon double equals
    ["Coloneqq"]: { args: 0, optArgs: 0 }, // ⩴ double colon double equals
    ["eqcolon"]: { args: 0, optArgs: 0 }, // ≕ equals colon
    ["Eqcolon"]: { args: 0, optArgs: 0 }, // equals double colon
    ["colonapprox"]: { args: 0, optArgs: 0 }, // colon approx
    ["Colonapprox"]: { args: 0, optArgs: 0 }, // double colon approx
    ["colonsim"]: { args: 0, optArgs: 0 }, // colon similar
    ["Colonsim"]: { args: 0, optArgs: 0 }, // double colon similar
    ["ratio"]: { args: 0, optArgs: 0 }, // ∶ ratio
    ["coloncolon"]: { args: 0, optArgs: 0 }, // ∷ proportion (double colon)
    ["coloncoloneq"]: { args: 0, optArgs: 0 }, // double colon equals
    ["coloncoloneqq"]: { args: 0, optArgs: 0 }, // double colon double equals
    ["equalscolon"]: { args: 0, optArgs: 0 }, // equals colon (alias)
    ["equalscoloncolon"]: { args: 0, optArgs: 0 }, // equals double colon
};
