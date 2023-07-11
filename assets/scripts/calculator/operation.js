export default class Operation {
    operation;
    onCalc;
    constructor(opts, operation = []) {
        this.operation = operation;
        this.onCalc = opts.onCalc;
    }
    add(value) {
        if (this.operation.length === 3) {
            this.operation.push(value);
        }
        console.log(this.operation);
        return this.length;
    }
    get lastPosition() {
        return '0';
    }
    set lastPosition(value) {
    }
    get length() {
        return this.operation.length;
    }
    getResult() {
        let result = '0';
        try {
            result = (eval(this.operation.join(""))).toString();
        }
        catch (e) {
            result = "ERRO";
        }
        return result;
    }
    calc() {
        let result = this.getResult();
        if (result.length > 12) {
            result = result.substring(0, 12);
        }
        this.operation = [result];
        this.onCalc(result);
    }
}
//# sourceMappingURL=operation.js.map