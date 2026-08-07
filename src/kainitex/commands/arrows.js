export const arrows = {
    // Basic arrows
    ["rightarrow"]: { args: 0, optArgs: 0, isOp: true }, // → right arrow
    ["leftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ← left arrow
    ["Rightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇒ double right arrow
    ["Leftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇐ double left arrow
    ["leftrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↔ bidirectional arrow
    ["Leftrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇔ double bidirectional arrow
    ["uparrow"]: { args: 0, optArgs: 0, isOp: true }, // ↑ up arrow
    ["downarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↓ down arrow
    ["Uparrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇑ double up arrow
    ["Downarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇓ double down arrow
    ["updownarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↕ vertical bidirectional arrow
    ["Updownarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇕ double vertical bidirectional arrow

    // Aliases
    ["to"]: { args: 0, optArgs: 0, isOp: true }, // → alias for \rightarrow
    ["gets"]: { args: 0, optArgs: 0, isOp: true }, // ← alias for \leftarrow
    ["mapsto"]: { args: 0, optArgs: 0, isOp: true }, // ↦ maps to (with tail)

    // Diagonal arrows
    ["nearrow"]: { args: 0, optArgs: 0, isOp: true }, // ↗ northeast arrow
    ["searrow"]: { args: 0, optArgs: 0, isOp: true }, // ↘ southeast arrow
    ["nwarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↖ northwest arrow
    ["swarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↙ southwest arrow

    // Harpoons
    ["rightharpoonup"]: { args: 0, optArgs: 0, isOp: true }, // ⇀ right harpoon with barb up
    ["rightharpoondown"]: { args: 0, optArgs: 0, isOp: true }, // ⇁ right harpoon with barb down
    ["leftharpoonup"]: { args: 0, optArgs: 0, isOp: true }, // ↼ left harpoon with barb up
    ["leftharpoondown"]: { args: 0, optArgs: 0, isOp: true }, // ↽ left harpoon with barb down
    ["upharpoonright"]: { args: 0, optArgs: 0, isOp: true }, // ↾ up harpoon with barb right
    ["upharpoonleft"]: { args: 0, optArgs: 0, isOp: true }, // ↿ up harpoon with barb left
    ["downharpoonright"]: { args: 0, optArgs: 0, isOp: true }, // ⇂ down harpoon with barb right
    ["downharpoonleft"]: { args: 0, optArgs: 0, isOp: true }, // ⇃ down harpoon with barb left
    ["rightleftharpoons"]: { args: 0, optArgs: 0, isOp: true }, // ⇌ right and left harpoons (equilibrium)
    ["leftrightharpoons"]: { args: 0, optArgs: 0, isOp: true }, // ⇋ left and right harpoons

    // Hooked arrows
    ["hookrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↪ hooked right arrow (injection)
    ["hookleftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↩ hooked left arrow

    // Long arrows
    ["longrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⟶ long right arrow
    ["longleftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⟵ long left arrow
    ["longleftrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⟷ long bidirectional arrow
    ["Longrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⟹ long double right arrow
    ["Longleftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⟸ long double left arrow
    ["Longleftrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⟺ long double bidirectional arrow
    ["longmapsto"]: { args: 0, optArgs: 0, isOp: true }, // ⟼ long maps to

    // Double-headed arrows
    ["twoheadrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↠ two-headed right arrow (surjection)
    ["twoheadleftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↞ two-headed left arrow

    // Tail arrows
    ["rightarrowtail"]: { args: 0, optArgs: 0, isOp: true }, // ↣ right arrow with tail (injection)
    ["leftarrowtail"]: { args: 0, optArgs: 0, isOp: true }, // ↢ left arrow with tail

    // Loop arrows
    ["looparrowright"]: { args: 0, optArgs: 0, isOp: true }, // ↬ right loop arrow
    ["looparrowleft"]: { args: 0, optArgs: 0, isOp: true }, // ↫ left loop arrow

    // Curved arrows
    ["curvearrowright"]: { args: 0, optArgs: 0, isOp: true }, // ↷ clockwise curved arrow
    ["curvearrowleft"]: { args: 0, optArgs: 0, isOp: true }, // ↶ counterclockwise curved arrow
    ["circlearrowright"]: { args: 0, optArgs: 0, isOp: true }, // ↻ clockwise circle arrow
    ["circlearrowleft"]: { args: 0, optArgs: 0, isOp: true }, // ↺ counterclockwise circle arrow

    // Dashed arrows
    ["dashrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇢ dashed right arrow
    ["dashleftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇠ dashed left arrow

    // Squiggly arrows
    ["rightsquigarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇝ right squiggle arrow
    ["leftrightsquigarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↭ bidirectional squiggle arrow
    ["leadsto"]: { args: 0, optArgs: 0, isOp: true }, // ⇝ leads to (alias)

    // Multi arrows
    ["multimap"]: { args: 0, optArgs: 0, isOp: true }, // ⊸ multimap (linear logic)

    // Negated arrows
    ["nrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↛ negated right arrow
    ["nleftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↚ negated left arrow
    ["nRightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇏ negated double right arrow
    ["nLeftarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇍ negated double left arrow
    ["nleftrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ↮ negated bidirectional arrow
    ["nLeftrightarrow"]: { args: 0, optArgs: 0, isOp: true }, // ⇎ negated double bidirectional arrow
};
