import { mrow, mo, mover, munder } from "./basic.js";

export function accentTemplate(node, render, symbolChar, isUnder = false, isWide = false) {
    const base = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const accent = mo(symbolChar, isWide ? { stretchy: true } : {});
    return isUnder ? munder(mrow(base), accent, { accentunder: true }) : mover(mrow(base), accent, { accent: true });
}

export function overunderTemplate(node, render, symbolChar, isUnder = false) {
    const base = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const accent = mo(symbolChar, { stretchy: true });
    return isUnder ? munder(mrow(base), accent, { accentunder: true }) : mover(mrow(base), accent, { accent: true });
}

export function scriptStackTemplate(node, render, isUnder = false) {
    const script = node.args[0] ? node.args[0].map((c) => render(c)).join("") : "";
    const base = node.args[1] ? node.args[1].map((c) => render(c)).join("") : "";
    return isUnder ? munder(mrow(base), mrow(script)) : mover(mrow(base), mrow(script));
}
