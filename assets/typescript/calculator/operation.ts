interface OperationOptions {
  onCalc: any;
}

export default class Operation {

  private onCalc: any;

  constructor(
    opts: OperationOptions,
    private operation: string[] = []
  ) {
    this.onCalc = opts.onCalc;
  }

  add(value: string): number {
    if (this.operation.length === 3) {
      this.operation.push(value);
    }
    console.log(this.operation);
    return this.length
  }

  get lastPosition(): string {
    return '0';
  }

  set lastPosition(value: string) {

  }

  get length(): number {
    return this.operation.length;
  }

  getResult(): string {
    let result: string = '0';
    try {
      result = (eval(this.operation.join(""))).toString();
    } catch (e) {
      result = "ERRO";
    }
    return result;
  }

  calc(): void {
    let result = this.getResult()
    if (result.length > 12) {
      result = result.substring(0, 12)
    }
    this.operation = [result];
    this.onCalc(result);
  }
}