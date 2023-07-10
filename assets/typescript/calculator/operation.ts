export default class Operation {

  constructor(
    private operation: string[] = []
  ) {

  }
  add(value: string): number {
    return this.operation.push(value);
  }

  get length(): number {
    return this.operation.length;
  }
}