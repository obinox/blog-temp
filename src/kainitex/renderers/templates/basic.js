export function mapAttrs(attrs = {}) {
    let str = "";
    for (const [key, val] of Object.entries(attrs)) {
        if (val !== undefined && val !== null) {
            str += ` ${key}="${val}"`;
        }
    }
    return str;
}

export function mrow(content, attrs = {}) {
    return `<mrow${mapAttrs(attrs)}>${content}</mrow>`;
}

export function mo(content, attrs = {}) {
    return `<mo${mapAttrs({ stretchy: false, ...attrs })}>${content}</mo>`;
}

export function mi(content, attrs = {}) {
    return `<mi${mapAttrs(attrs)}>${content}</mi>`;
}

export function mn(content, attrs = {}) {
    return `<mn${mapAttrs(attrs)}>${content}</mn>`;
}

export function mfrac(num, den, attrs = {}) {
    return `<mfrac${mapAttrs(attrs)}>${mrow(num)}${mrow(den)}</mfrac>`;
}

export function msqrt(content, attrs = {}) {
    return `<msqrt${mapAttrs(attrs)}>${content}</msqrt>`;
}

export function mroot(content, index, attrs = {}) {
    return `<mroot${mapAttrs(attrs)}>${mrow(content)}${mrow(index)}</mroot>`;
}

export function mtd(content, attrs = {}) {
    return `<mtd${mapAttrs(attrs)}>${content}</mtd>`;
}

export function mtr(content, attrs = {}) {
    return `<mtr${mapAttrs(attrs)}>${content}</mtr>`;
}

export function mtable(content, attrs = {}) {
    return `<mtable${mapAttrs(attrs)}>${content}</mtable>`;
}

export function mstyle(content, attrs = {}) {
    return `<mstyle${mapAttrs(attrs)}>${content}</mstyle>`;
}

export function merror(content, attrs = {}) {
    return `<merror${mapAttrs(attrs)}>${content}</merror>`;
}

export function mtext(content, attrs = {}) {
    return `<mtext${mapAttrs(attrs)}>${content}</mtext>`;
}

export function munderover(base, sub, sup, attrs = {}) {
    return `<munderover${mapAttrs(attrs)}>${base}${sub}${sup}</munderover>`;
}

export function munder(base, sub, attrs = {}) {
    return `<munder${mapAttrs(attrs)}>${base}${sub}</munder>`;
}

export function mmover(base, sup, attrs = {}) {
    return `<mover${mapAttrs(attrs)}>${base}${sup}</mover>`;
}

export function mover(base, sup, attrs = {}) {
    return `<mover${mapAttrs(attrs)}>${base}${sup}</mover>`;
}

export function msubsup(base, sub, sup, attrs = {}) {
    return `<msubsup${mapAttrs(attrs)}>${base}${sub}${sup}</msubsup>`;
}

export function msub(base, sub, attrs = {}) {
    return `<msub${mapAttrs(attrs)}>${base}${sub}</msub>`;
}

export function msup(base, sup, attrs = {}) {
    return `<msup${mapAttrs(attrs)}>${base}${sup}</msup>`;
}

export function root(node, render) {
    const inner = node.children.map((child) => render(child)).join("");
    return `<math>${inner}</math>`;
}
