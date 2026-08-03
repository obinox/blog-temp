export const delimitersMisc = {
    // Delimiter commands
    ["left"]: { args: 0, optArgs: 0, isLeft: true }, // auto-scaling left delimiter
    ["right"]: { args: 0, optArgs: 0, isRight: true }, // auto-scaling right delimiter
    ["middle"]: { args: 0, optArgs: 0 }, // auto-scaling middle delimiter

    // Angle brackets
    ["langle"]: { args: 0, optArgs: 0 }, // ⟨ left angle bracket
    ["rangle"]: { args: 0, optArgs: 0 }, // ⟩ right angle bracket

    // Floor / ceiling
    ["lfloor"]: { args: 0, optArgs: 0 }, // ⌊ left floor bracket
    ["rfloor"]: { args: 0, optArgs: 0 }, // ⌋ right floor bracket
    ["lceil"]: { args: 0, optArgs: 0 }, // ⌈ left ceiling bracket
    ["rceil"]: { args: 0, optArgs: 0 }, // ⌉ right ceiling bracket

    // Vertical bars
    ["vert"]: { args: 0, optArgs: 0 }, // | single vertical bar (abs value)
    ["Vert"]: { args: 0, optArgs: 0 }, // ‖ double vertical bar (norm)
    ["lvert"]: { args: 0, optArgs: 0 }, // | left absolute value delimiter
    ["rvert"]: { args: 0, optArgs: 0 }, // | right absolute value delimiter
    ["lVert"]: { args: 0, optArgs: 0 }, // ‖ left norm delimiter
    ["rVert"]: { args: 0, optArgs: 0 }, // ‖ right norm delimiter

    // Corners
    ["ulcorner"]: { args: 0, optArgs: 0 }, // ⌜ upper left corner (Quine corner)
    ["urcorner"]: { args: 0, optArgs: 0 }, // ⌝ upper right corner
    ["llcorner"]: { args: 0, optArgs: 0 }, // ⌞ lower left corner
    ["lrcorner"]: { args: 0, optArgs: 0 }, // ⌟ lower right corner

    // Calculus / analysis
    ["infty"]: { args: 0, optArgs: 0 }, // ∞ infinity
    ["partial"]: { args: 0, optArgs: 0 }, // ∂ partial derivative
    ["nabla"]: { args: 0, optArgs: 0 }, // ∇ nabla / gradient operator

    // Logic / quantifiers
    ["forall"]: { args: 0, optArgs: 0 }, // ∀ for all (universal quantifier)
    ["exists"]: { args: 0, optArgs: 0 }, // ∃ there exists (existential quantifier)
    ["nexists"]: { args: 0, optArgs: 0 }, // ∄ there does not exist
    ["not"]: { args: 0, optArgs: 0 }, // negation slash overlay
    ["top"]: { args: 0, optArgs: 0 }, // ⊤ top / tautology / true
    ["bot"]: { args: 0, optArgs: 0 }, // ⊥ bottom / contradiction / false

    // Empty sets
    ["emptyset"]: { args: 0, optArgs: 0 }, // ∅ empty set (slashed zero)
    ["varnothing"]: { args: 0, optArgs: 0 }, // ⌀ empty set (variant circle)

    // Dots
    ["ldots"]: { args: 0, optArgs: 0 }, // … lower ellipsis (baseline dots)
    ["cdots"]: { args: 0, optArgs: 0 }, // ⋯ centered ellipsis (middle dots)
    ["vdots"]: { args: 0, optArgs: 0 }, // ⋮ vertical ellipsis
    ["ddots"]: { args: 0, optArgs: 0 }, // ⋱ diagonal ellipsis (down-right)
    ["hdots"]: { args: 0, optArgs: 0 }, // ⋯ horizontal dots (alias)
    ["iddots"]: { args: 0, optArgs: 0 }, // ⋰ diagonal ellipsis (up-right)
    ["dots"]: { args: 0, optArgs: 0 }, // … automatic ellipsis
    ["dotsb"]: { args: 0, optArgs: 0 }, // ⋯ dots for binary operators
    ["dotsc"]: { args: 0, optArgs: 0 }, // … dots for commas
    ["dotsi"]: { args: 0, optArgs: 0 }, // ⋯ dots for integrals
    ["dotsm"]: { args: 0, optArgs: 0 }, // ⋯ dots for multiplication
    ["dotso"]: { args: 0, optArgs: 0 }, // … dots for other contexts

    // Hebrew letters
    ["aleph"]: { args: 0, optArgs: 0 }, // ℵ aleph (cardinality of integers)
    ["beth"]: { args: 0, optArgs: 0 }, // ℶ beth (cardinality of reals)
    ["gimel"]: { args: 0, optArgs: 0 }, // ℷ gimel
    ["daleth"]: { args: 0, optArgs: 0 }, // ℸ daleth

    // Special letters / constants
    ["hbar"]: { args: 0, optArgs: 0 }, // ℏ reduced Planck constant
    ["hslash"]: { args: 0, optArgs: 0 }, // ℏ h-slash (alias for hbar)
    ["ell"]: { args: 0, optArgs: 0 }, // ℓ script small L
    ["imath"]: { args: 0, optArgs: 0 }, // ı dotless i (for accents)
    ["jmath"]: { args: 0, optArgs: 0 }, // ȷ dotless j (for accents)
    ["Re"]: { args: 0, optArgs: 0 }, // ℜ real part (Fraktur R)
    ["Im"]: { args: 0, optArgs: 0 }, // ℑ imaginary part (Fraktur I)
    ["wp"]: { args: 0, optArgs: 0 }, // ℘ Weierstrass p-function
    ["complement"]: { args: 0, optArgs: 0 }, // ∁ set complement
    ["Finv"]: { args: 0, optArgs: 0 }, // Ⅎ turned capital F
    ["Game"]: { args: 0, optArgs: 0 }, // ⅁ turned sans-serif G (game theory)
    ["mho"]: { args: 0, optArgs: 0 }, // ℧ mho (reciprocal ohm)
    ["eth"]: { args: 0, optArgs: 0 }, // ð eth (Old English letter)

    // Primes
    ["prime"]: { args: 0, optArgs: 0 }, // ′ prime
    ["backprime"]: { args: 0, optArgs: 0 }, // ‵ reversed prime

    // Slashes
    ["backslash"]: { args: 0, optArgs: 0 }, // \ backslash
    ["diagup"]: { args: 0, optArgs: 0 }, // ╱ diagonal stroke up
    ["diagdown"]: { args: 0, optArgs: 0 }, // ╲ diagonal stroke down

    // Logic connectors
    ["therefore"]: { args: 0, optArgs: 0 }, // ∴ therefore (three dots up)
    ["because"]: { args: 0, optArgs: 0 }, // ∵ because (three dots down)

    // Geometric symbols
    ["angle"]: { args: 0, optArgs: 0 }, // ∠ angle
    ["measuredangle"]: { args: 0, optArgs: 0 }, // ∡ measured angle (with arc)
    ["sphericalangle"]: { args: 0, optArgs: 0 }, // ∢ spherical angle
    ["triangle"]: { args: 0, optArgs: 0 }, // △ triangle
    ["blacktriangle"]: { args: 0, optArgs: 0 }, // ▲ filled up triangle
    ["blacktriangledown"]: { args: 0, optArgs: 0 }, // ▼ filled down triangle
    ["blacktriangleleft"]: { args: 0, optArgs: 0 }, // ◀ filled left triangle
    ["blacktriangleright"]: { args: 0, optArgs: 0 }, // ▶ filled right triangle
    ["degree"]: { args: 0, optArgs: 0 }, // ° degree symbol
    ["square"]: { args: 0, optArgs: 0 }, // □ open square (QED)
    ["blacksquare"]: { args: 0, optArgs: 0 }, // ■ filled square (QED variant)
    ["lozenge"]: { args: 0, optArgs: 0 }, // ◊ lozenge (diamond)
    ["blacklozenge"]: { args: 0, optArgs: 0 }, // ⧫ filled lozenge
    ["bigstar"]: { args: 0, optArgs: 0 }, // ★ filled five-pointed star

    // Circled symbols
    ["circledR"]: { args: 0, optArgs: 0 }, // ® registered trademark
    ["circledS"]: { args: 0, optArgs: 0 }, // Ⓢ circled S

    // Music symbols
    ["flat"]: { args: 0, optArgs: 0 }, // ♭ flat (music)
    ["natural"]: { args: 0, optArgs: 0 }, // ♮ natural (music)
    ["sharp"]: { args: 0, optArgs: 0 }, // ♯ sharp (music)

    // Card suits
    ["clubsuit"]: { args: 0, optArgs: 0 }, // ♣ club suit
    ["diamondsuit"]: { args: 0, optArgs: 0 }, // ♢ diamond suit
    ["heartsuit"]: { args: 0, optArgs: 0 }, // ♡ heart suit
    ["spadesuit"]: { args: 0, optArgs: 0 }, // ♠ spade suit

    // Typography / currency
    ["S"]: { args: 0, optArgs: 0 }, // § section sign
    ["P"]: { args: 0, optArgs: 0 }, // ¶ paragraph sign (pilcrow)
    ["copyright"]: { args: 0, optArgs: 0 }, // © copyright symbol
    ["pounds"]: { args: 0, optArgs: 0 }, // £ pound sterling
    ["yen"]: { args: 0, optArgs: 0 }, // ¥ yen / yuan sign
    ["checkmark"]: { args: 0, optArgs: 0 }, // ✓ check mark
    ["maltese"]: { args: 0, optArgs: 0 }, // ✠ Maltese cross

    // Special delimiters
    ["llbracket"]: { args: 0, optArgs: 0 }, // ⟦ left double bracket
    ["rrbracket"]: { args: 0, optArgs: 0 }, // ⟧ right double bracket
    ["lgroup"]: { args: 0, optArgs: 0 }, // left group delimiter
    ["rgroup"]: { args: 0, optArgs: 0 }, // right group delimiter
    ["lmoustache"]: { args: 0, optArgs: 0 }, // upper left curly brace section
    ["rmoustache"]: { args: 0, optArgs: 0 }, // upper right curly brace section
    ["bracevert"]: { args: 0, optArgs: 0 }, // brace vertical extension
    ["lBrace"]: { args: 0, optArgs: 0 }, // ⦃ left double curly brace
    ["rBrace"]: { args: 0, optArgs: 0 }, // ⦄ right double curly brace

    // Dot punctuation
    ["cdotp"]: { args: 0, optArgs: 0 }, // ⋅ centered dot (punctuation spacing)
    ["ldotp"]: { args: 0, optArgs: 0 }, // . lower dot (punctuation spacing)
    ["colon"]: { args: 0, optArgs: 0 }, // : colon (with relation spacing)

    // Text-mode special characters
    ["AA"]: { args: 0, optArgs: 0 }, // Å angstrom
    ["ss"]: { args: 0, optArgs: 0 }, // ß eszett (sharp s)
    ["ae"]: { args: 0, optArgs: 0 }, // æ ae ligature
    ["oe"]: { args: 0, optArgs: 0 }, // œ oe ligature
    ["AE"]: { args: 0, optArgs: 0 }, // Æ AE ligature
    ["OE"]: { args: 0, optArgs: 0 }, // Œ OE ligature
    ["o"]: { args: 0, optArgs: 0 }, // ø slashed o
    ["O"]: { args: 0, optArgs: 0 }, // Ø slashed O
    ["i"]: { args: 0, optArgs: 0 }, // ı dotless i (text mode)
    ["j"]: { args: 0, optArgs: 0 }, // ȷ dotless j (text mode)

    // Style commands
    ["displaystyle"]: { args: 0, optArgs: 0 }, // switch to display style
    ["textstyle"]: { args: 0, optArgs: 0 }, // switch to text style
    ["scriptstyle"]: { args: 0, optArgs: 0 }, // switch to script style
    ["scriptscriptstyle"]: { args: 0, optArgs: 0 }, // switch to scriptscript style

    // Phantom / spacing
    ["phantom"]: { args: 1, optArgs: 0 }, // invisible box (occupies space)
    ["hphantom"]: { args: 1, optArgs: 0 }, // horizontal phantom (width only)
    ["vphantom"]: { args: 1, optArgs: 0 }, // vertical phantom (height only)
    ["smash"]: { args: 1, optArgs: 1 }, // collapse vertical extent [t/b]

    // Color / boxing
    ["color"]: { args: 1, optArgs: 0 }, // set foreground color
    ["textcolor"]: { args: 2, optArgs: 0 }, // colored text {color}{text}
    ["colorbox"]: { args: 2, optArgs: 0 }, // background color box {color}{text}
    ["fcolorbox"]: { args: 3, optArgs: 0 }, // framed color box {border}{bg}{text}
    ["boxed"]: { args: 1, optArgs: 0 }, // box around expression
    ["cancel"]: { args: 1, optArgs: 0 }, // diagonal strikethrough
    ["bcancel"]: { args: 1, optArgs: 0 }, // back cancel (upper-left to lower-right)
    ["xcancel"]: { args: 1, optArgs: 0 }, // X-shaped cancel (cross out)
    ["sout"]: { args: 1, optArgs: 0 }, // horizontal strikeout

    // Custom operator name
    ["operatorname"]: { args: 1, optArgs: 0 }, // upright operator name (e.g. Tr, Spec)
    ["operatorname*"]: { args: 1, optArgs: 0 }, // operator name with limits support

    // Tag / reference
    ["tag"]: { args: 1, optArgs: 0 }, // equation tag (number)
    ["tag*"]: { args: 1, optArgs: 0 }, // equation tag without parentheses

    // Substack
    ["substack"]: { args: 1, optArgs: 0 }, // multiline subscript / superscript

    // Limits control
    ["limits"]: { args: 0, optArgs: 0, isLimitModifier: true }, // force limits above/below
    ["nolimits"]: { args: 0, optArgs: 0, isLimitModifier: true }, // force limits as subscript/superscript

    // Misc layout
    ["rule"]: { args: 2, optArgs: 1 }, // horizontal rule {width}{height}[raise]
    ["href"]: { args: 2, optArgs: 0 }, // hyperlink {url}{text}
    ["url"]: { args: 1, optArgs: 0 }, // typeset URL
    ["kern"]: { args: 1, optArgs: 0 }, // horizontal kerning
    ["mkern"]: { args: 1, optArgs: 0 }, // math kerning (mu units)
    ["mskip"]: { args: 1, optArgs: 0 }, // math skip (mu units)

    // Transforms / Special Operators
    ["laplace"]: { args: 0, optArgs: 0 }, // ℒ Laplace transform
    ["Fourier"]: { args: 0, optArgs: 0 }, // ℱ Fourier transform
    ["fourier"]: { args: 0, optArgs: 0 }, // fourier transform (variant)
    ["Mellin"]: { args: 0, optArgs: 0 }, // ℳ Mellin transform
    ["mellin"]: { args: 0, optArgs: 0 }, // mellin transform (variant)

    // Small spacing commands
    ["!"]: { args: 0, optArgs: 0 }, // negative thin space (−3/18 em)
    [","]: { args: 0, optArgs: 0 }, // thin space (3/18 em)
    [":"]: { args: 0, optArgs: 0 }, // medium space (4/18 em)
    [";"]: { args: 0, optArgs: 0 }, // thick space (5/18 em)
    [" "]: { args: 0, optArgs: 0 }, // standard inter-word space
};
