import DateTime from "./datetime.js";
import Screen from "./screen.js";

export default class CalculatorControler {
  /**
   *
   */
  constructor(
    private screen = new Screen()
  ) {
    // super();
    // console.log("Calculator Controler")
    console.log(this.screen.content);
    this.screen.content = "123456789012";
    new DateTime();
  }
}