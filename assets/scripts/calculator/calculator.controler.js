import DateTime from "./datetime.js";
import Screen from "./screen.js";
export default class CalculatorControler {
    screen;
    constructor(screen = new Screen()) {
        this.screen = screen;
        console.log(this.screen.content);
        this.screen.content = "123456789012";
        new DateTime();
    }
}
//# sourceMappingURL=calculator.controler.js.map