export const fontsSpacing = {
    // Math fonts (1 arg)
    ["mathrm"]: { args: 1, optArgs: 0 }, // roman (upright) math font
    ["mathbf"]: { args: 1, optArgs: 0 }, // bold math font
    ["mathit"]: { args: 1, optArgs: 0 }, // italic math font
    ["mathbb"]: { args: 1, optArgs: 0 }, // blackboard bold (ℝ, ℤ, ℕ)
    ["mathcal"]: { args: 1, optArgs: 0 }, // calligraphic font (𝒜, ℬ)
    ["mathfrak"]: { args: 1, optArgs: 0 }, // Fraktur font (𝔄, 𝔅)
    ["mathsf"]: { args: 1, optArgs: 0 }, // sans-serif math font
    ["mathtt"]: { args: 1, optArgs: 0 }, // typewriter (monospace) math font
    ["mathnormal"]: { args: 1, optArgs: 0 }, // default math font (italic)
    ["mathscr"]: { args: 1, optArgs: 0 }, // script font (ℒ, ℋ)
    ["mathbfit"]: { args: 1, optArgs: 0 }, // bold italic math font
    ["mathsfit"]: { args: 1, optArgs: 0 }, // sans-serif italic math font
    ["mathbfsfit"]: { args: 1, optArgs: 0 }, // bold sans-serif italic math font

    // Bold / emphasis
    ["boldsymbol"]: { args: 1, optArgs: 0 }, // bold symbol (works on Greek too)
    ["bm"]: { args: 1, optArgs: 0 }, // bold math (alias for boldsymbol)
    ["pmb"]: { args: 1, optArgs: 0 }, // poor man's bold (overlay)

    // Text mode fonts
    ["text"]: { args: 1, optArgs: 0 }, // text mode (upright, with spaces)
    ["mbox"]: { args: 1, optArgs: 0 }, // text box (legacy text mode)
    ["textbf"]: { args: 1, optArgs: 0 }, // bold text
    ["textit"]: { args: 1, optArgs: 0 }, // italic text
    ["textrm"]: { args: 1, optArgs: 0 }, // roman text
    ["textsf"]: { args: 1, optArgs: 0 }, // sans-serif text
    ["texttt"]: { args: 1, optArgs: 0 }, // typewriter text
    ["textnormal"]: { args: 1, optArgs: 0 }, // normal weight text
    ["textup"]: { args: 1, optArgs: 0 }, // upright text

    // Short font commands (legacy/compat)
    ["scr"]: { args: 1, optArgs: 0 }, // script font (short)
    ["cal"]: { args: 1, optArgs: 0 }, // calligraphic (short)
    ["Bbb"]: { args: 1, optArgs: 0 }, // blackboard bold (short)
    ["frak"]: { args: 1, optArgs: 0 }, // Fraktur (short)
    ["rm"]: { args: 1, optArgs: 0 }, // roman (short)
    ["bf"]: { args: 1, optArgs: 0 }, // bold (short)
    ["it"]: { args: 1, optArgs: 0 }, // italic (short)
    ["sf"]: { args: 1, optArgs: 0 }, // sans-serif (short)
    ["tt"]: { args: 1, optArgs: 0 }, // typewriter (short)

    // Fixed spacing (0 args)
    ["quad"]: { args: 0, optArgs: 0 }, // 1 em space
    ["qquad"]: { args: 0, optArgs: 0 }, // 2 em space
    ["thinspace"]: { args: 0, optArgs: 0 }, // 3/18 em thin space
    ["medspace"]: { args: 0, optArgs: 0 }, // 4/18 em medium space
    ["thickspace"]: { args: 0, optArgs: 0 }, // 5/18 em thick space
    ["negthinspace"]: { args: 0, optArgs: 0 }, // −3/18 em negative thin space
    ["negmedspace"]: { args: 0, optArgs: 0 }, // −4/18 em negative medium space
    ["negthickspace"]: { args: 0, optArgs: 0 }, // −5/18 em negative thick space
    ["enspace"]: { args: 0, optArgs: 0 }, // 1/2 em space
    ["nobreakspace"]: { args: 0, optArgs: 0 }, // non-breaking space

    // Variable spacing (1 arg)
    ["hspace"]: { args: 1, optArgs: 0 }, // horizontal space {length}
    ["vspace"]: { args: 1, optArgs: 0 }, // vertical space {length}

    // Size declarations (0 args, affect subsequent content)
    ["tiny"]: { args: 0, optArgs: 0 }, // 5pt — smallest size
    ["scriptsize"]: { args: 0, optArgs: 0 }, // 7pt — script-level size
    ["footnotesize"]: { args: 0, optArgs: 0 }, // 8pt — footnote size
    ["small"]: { args: 0, optArgs: 0 }, // 9pt — small size
    ["normalsize"]: { args: 0, optArgs: 0 }, // 10pt — default body size
    ["large"]: { args: 0, optArgs: 0 }, // 12pt — large size
    ["Large"]: { args: 0, optArgs: 0 }, // 14pt — larger size
    ["LARGE"]: { args: 0, optArgs: 0 }, // 17pt — very large size
    ["huge"]: { args: 0, optArgs: 0 }, // 20pt — huge size
    ["Huge"]: { args: 0, optArgs: 0 }, // 25pt — largest size
};
