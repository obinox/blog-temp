import { NODE_TYPE } from "./types.js";

export class Node {
    constructor(type) {
        this.type = type;
    }
}

export class RootNode extends Node {
    constructor(children = []) {
        super(NODE_TYPE.ROOT);
        this.children = children;
    }
}

export class SequenceNode extends Node {
    constructor(children = []) {
        super(NODE_TYPE.SEQUENCE);
        this.children = children;
    }
}

export class GroupNode extends Node {
    constructor(children = []) {
        super(NODE_TYPE.GROUP);
        this.children = children;
    }
}

export class NumberNode extends Node {
    constructor(value) {
        super(NODE_TYPE.NUMBER);
        this.value = value;
    }
}

export class IdentifierNode extends Node {
    constructor(name) {
        super(NODE_TYPE.IDENTIFIER);
        this.name = name;
    }
}

export class OperatorNode extends Node {
    constructor(value) {
        super(NODE_TYPE.OPERATOR);
        this.value = value;
    }
}

export class ScriptNode extends Node {
    constructor(base, sup = null, sub = null, limits = null) {
        super(NODE_TYPE.SCRIPT);
        this.base = base;
        if (sup !== null) this.sup = sup;
        if (sub !== null) this.sub = sub;
        if (limits !== null) this.limits = limits;
    }
}

export class CommandNode extends Node {
    constructor(name, args = [], optArg = null) {
        super(NODE_TYPE.COMMAND);
        this.name = name;
        this.args = args;
        if (optArg !== null) this.optArg = optArg;
    }
}

export class EnvironmentNode extends Node {
    constructor(name, rows = []) {
        super(NODE_TYPE.ENVIRONMENT);
        this.name = name;
        this.rows = rows;
    }
}

export class ErrorNode extends Node {
    constructor(message, raw) {
        super(NODE_TYPE.ERROR);
        this.message = message;
        if (raw !== undefined) this.raw = raw;
    }
}

export class LeftRightNode extends Node {
    constructor(leftDelim, rightDelim, body = []) {
        super(NODE_TYPE.LEFTRIGHT);
        this.leftDelim = leftDelim;
        this.rightDelim = rightDelim;
        this.body = body;
    }
}
