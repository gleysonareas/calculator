export default class Screen {

  constructor(
    private element: HTMLDivElement | null = document.querySelector("#values")
  ) {
    this.content = "0";
  }

  set content(value: string) {
    if (value.toString().length > 12) {
      value = "ERROR";
    }
    if (this.element) {
      this.element.innerHTML = value.toString().replace(".", ",");
    }
  }

  get content(): string {
    // Isso:
    return this.element ? this.element.innerHTML : "0";
    // É a mesma coisa que isso:
    // if (this.element) {
    //   return this.element.innerHTML;
    // } else {
    //   return "0";
    // }
  }
}