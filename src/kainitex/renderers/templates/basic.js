export function serializeAttrs(attrs = {}) {
    let str = "";
    for (const [key, val] of Object.entries(attrs)) {
        if (val !== undefined && val !== null) {
            str += ` ${key}="${val}"`;
        }
    }
    return str;
}

export function mrow(content, attrs = {}) {
    return `<mrow${serializeAttrs(attrs)}>${content}</mrow>`;
}

export function mo(content, attrs = {}) {
    if (!content) return "";
    return `<mo${serializeAttrs(attrs)}>${content}</mo>`;
}

export function mi(content, attrs = {}) {
    return `<mi${serializeAttrs(attrs)}>${content}</mi>`;
}

export function mn(content, attrs = {}) {
    return `<mn${serializeAttrs(attrs)}>${content}</mn>`;
}

export function mfrac(num, den, attrs = {}) {
    return `<mfrac${serializeAttrs(attrs)}><mrow>${num}</mrow><mrow>${den}</mrow></mfrac>`;
}

export function msqrt(content) {
    return `<msqrt>${content}</msqrt>`;
}

export function mroot(content, index) {
    return `<mroot><mrow>${content}</mrow><mrow>${index}</mrow></mroot>`;
}

export function mtd(content) {
    return `<mtd>${content}</mtd>`;
}

export function mtr(content) {
    return `<mtr>${content}</mtr>`;
}

export function mtable(content) {
    return `<mtable>${content}</mtable>`;
}

export function merror(content) {
    return `<merror>${content}</merror>`;
}

export function mtext(content) {
    return `<mtext>${content}</mtext>`;
}

export function munderover(base, sub, sup) {
    return `<munderover>${base}${sub}${sup}</munderover>`;
}

export function munder(base, sub) {
    return `<munder>${base}${sub}</munder>`;
}

export function mmover(base, sup) {
    return `<mover>${base}${sup}</mover>`;
}

export function msubsup(base, sub, sup) {
    return `<msubsup>${base}${sub}${sup}</msubsup>`;
}

export function msub(base, sub) {
    return `<msub>${base}${sub}</msub>`;
}

export function msup(base, sup) {
    return `<msup>${base}${sup}</msup>`;
}

export function root(node, renderToMathML) {
    const inner = node.children.map((child) => renderToMathML(child)).join("");
    return `<math>${inner}</math>`;
}
