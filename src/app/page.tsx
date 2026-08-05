"use client";

import React, { useState, useEffect } from "react";
import { kainitex } from "../kainitex";
import { COMMANDS } from "../kainitex/commands";

// Helper function to generate mathematically natural test cases with surrounding context
const generateContextualTestCase = (name: string, spec: any) => {
    if (name === "") return "";

    // 1. Accents -> \hat{x}, \vec{v}
    const isAccent = ["hat", "check", "breve", "acute", "grave", "tilde", "bar", "vec", "dot", "ddot", "dddot", "ddddot", "mathring", "widehat", "widetilde", "widecheck", "wideparen", "overline", "underline", "overbrace", "underbrace", "overgroup", "undergroup", "overparen", "underparen", "utilde"].includes(name);
    if (isAccent && spec.args === 1) {
        return `\\${name}{x}`;
    }

    // 2. Math Fonts -> \mathrm{A}, \mathbf{x}
    const isFont = ["mathrm", "mathbf", "mathit", "mathbb", "mathcal", "mathfrak", "mathsf", "mathtt", "mathnormal", "mathscr", "mathbfit", "mathsfit", "mathbfsfit", "boldsymbol", "bm", "pmb", "text", "mbox", "textbf", "textit", "textrm", "textsf", "texttt", "textnormal", "textup", "scr", "cal", "Bbb", "frak", "rm", "bf", "it", "sf", "tt"].includes(name);
    if (isFont && spec.args === 1) {
        return `\\${name}{A}`;
    }

    // 3. Relations -> a \leq b
    const isRelation = ["leq", "le", "geq", "ge", "neq", "ne", "approx", "sim", "simeq", "equiv", "cong", "subset", "supset", "subseteq", "supseteq", "in", "notin", "ni", "propto", "perp", "mid", "parallel", "implies", "impliedby", "iff", "coloneq", "Coloneq", "coloneqq", "Coloneqq", "eqcolon", "Eqcolon", "ratio", "coloncolon", "between", "pitchfork", "smile", "frown", "bowtie", "Join"].includes(name) || name.startsWith("n") || name.endsWith("eq");
    if (isRelation && spec.args === 0) {
        return `a \\${name} b`;
    }

    // 4. Arrows -> x \rightarrow y
    const isArrow = ["rightarrow", "to", "leftarrow", "gets", "mapsto", "leadsto", "multimap"].includes(name) || name.endsWith("arrow") || name.endsWith("arrowright") || name.endsWith("arrowleft") || name.startsWith("x");
    if (isArrow && spec.args === 0) {
        return `x \\${name} y`;
    }

    // 5. Binary Operators -> a \times b
    const isBinaryOperator = ["pm", "mp", "times", "div", "cdot", "ast", "star", "circ", "bullet", "oplus", "ominus", "otimes", "oslash", "wedge", "vee", "cap", "cup", "setminus", "box", "dagger", "ddagger", "dag", "ddag", "amalg", "wr"].includes(name) || name.startsWith("box") || name.startsWith("circled");
    if (isBinaryOperator && spec.args === 0) {
        return `a \\${name} b`;
    }

    // 6. Large Operators -> \sum_{i=1}^n x_i
    const isLargeOperator = ["sum", "prod", "coprod", "int", "integral", "iint", "iiint", "iiiint", "oint", "oiint", "oiiint", "bigvee", "bigcup", "bigcap", "bigoplus", "bigotimes", "bigsqcup", "bigwedge", "biguplus"].includes(name);
    if (isLargeOperator) {
        return `\\${name}_{i=1}^n x_i`;
    }

    // 7. Limits Modifier -> \sum\limits_{i=1}^n x_i
    if (name === "limits" || name === "nolimits") {
        return `\\sum\\${name}_{i=1}^n x_i`;
    }

    // 8. Infix Operators -> {n \choose k}
    if (spec.isInfix) {
        return `{n \\${name} k}`;
    }

    // 9. Environments -> \matrix{a & b \\ c & d}
    if (spec.isEnv) {
        return `\\${name}{a & b \\\\ c & d}`;
    }

    // 10. Mathematical Functions -> \sin(x)
    const isFunction = ["sin", "cos", "tan", "cot", "sec", "csc", "arcsin", "arccos", "arctan", "sinh", "cosh", "tanh", "log", "ln", "lg", "exp", "lim", "max", "min", "sup", "inf", "argmax", "argmin", "det", "deg", "gcd", "lcm", "ker", "hom", "dim", "arg", "laplace", "Fourier", "Mellin"].includes(name);
    if (isFunction) {
        return `\\${name}(x)`;
    }

    // 11. Delimiters -> \left\langle x \right\rangle
    const isDelimiter = ["langle", "rangle", "lfloor", "rfloor", "lceil", "rceil", "vert", "Vert", "lvert", "rvert", "lVert", "rVert", "llbracket", "rrbracket", "lgroup", "rgroup", "lmoustache", "rmoustache", "lBrace", "rBrace"].includes(name);
    if (isDelimiter) {
        // Determine matching pair
        let open = name;
        let close = name;
        if (name.startsWith("l") && name !== "lozenge") {
            open = name;
            close = name.replace(/^l/, "r");
        } else if (name.startsWith("r")) {
            open = name.replace(/^r/, "l");
            close = name;
        } else if (name === "langle") {
            close = "rangle";
        } else if (name === "rangle") {
            open = "langle";
        }
        return `\\left\\${open} x \\right\\${close}`;
    }

    // 12. \left / \right delimiters controllers
    if (spec.isLeft) {
        return `\\${name}( x \\right)`;
    }
    if (spec.isRight) {
        return `\\left( x \\${name})`;
    }

    // 13. Extensible arrows -> \xrightarrow[below]{above}
    if (spec.args === 1 && spec.optArgs === 1 && name.startsWith("x")) {
        return `a \\${name}[below]{above} b`;
    }

    // --- Fallback generation ---
    let latex = `\\${name}`;
    if (spec.args === 1) {
        latex += "{x}";
    } else if (spec.args === 2) {
        latex += "{x}{y}";
    } else if (spec.args === 3) {
        latex += "{x}{y}{z}";
    }
    return latex;
};

// Generate list of test cases
const generateAllTestCases = () => {
    const cases: { name: string; latex: string }[] = [];

    Object.entries(COMMANDS).forEach(([name, spec]) => {
        const latex = generateContextualTestCase(name, spec);
        if (latex) {
            cases.push({ name, latex });
        }
    });

    return cases;
};

const ALL_TEST_CASES = generateAllTestCases();

export default function Home() {
    const [customInput, setCustomInput] = useState("");
    const [customRender, setCustomRender] = useState("");

    useEffect(() => {
        try {
            if (customInput.trim()) {
                setCustomRender(kainitex(customInput));
            } else {
                setCustomRender("");
            }
        } catch (e: any) {
            setCustomRender(`Error: ${e.message}`);
        }
    }, [customInput]);

    return (
        <main>
            <h1>Kainitex Full Contextual Test Suite ({ALL_TEST_CASES.length} Cases)</h1>

            {/* Real-time Custom Tester */}
            <div>
                <strong>Test custom LaTeX: </strong>
                <input type="text" value={customInput} onChange={(e) => setCustomInput(e.target.value)} placeholder="Type custom LaTeX here..." style={{ width: "300px", fontFamily: "monospace" }} />
                {customRender && (
                    <span style={{ marginLeft: "10px" }}>
                        <strong>Preview: </strong>
                        <span dangerouslySetInnerHTML={{ __html: customRender }} />
                    </span>
                )}
            </div>

            <br />

            {/* Pure HTML Table */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Symbol Key</th>
                        <th>LaTeX Code (with Context)</th>
                        <th>Rendered MathML</th>
                    </tr>
                </thead>
                <tbody>
                    {ALL_TEST_CASES.map((item, index) => {
                        let rendered = "";
                        try {
                            rendered = kainitex(item.latex);
                        } catch (e: any) {
                            rendered = `<span style="color: #ef4444;">Error: ${e.message}</span>`;
                        }

                        return (
                            <tr key={index}>
                                <td align="center">{index + 1}</td>
                                <td>
                                    <strong>{item.name}</strong>
                                </td>
                                <td>
                                    <code>{item.latex}</code>
                                </td>
                                <td>
                                    <div dangerouslySetInnerHTML={{ __html: rendered }} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
}
