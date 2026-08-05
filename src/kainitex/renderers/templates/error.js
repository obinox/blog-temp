import { merror, mtext } from "./basic.js";

export function errorTemplate(node) {
    const message = node.message + (node.raw ? ": " + node.raw : "");
    return merror(mtext(message));
}
