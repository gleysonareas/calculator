export default class Operation {
    operation;
    constructor(operation = []) {
        this.operation = operation;
    }
    add(value) {
        return this.operation.push(value);
    }
    get length() {
        return this.operation.length;
    }
}
//# sourceMappingURL=operation.js.map