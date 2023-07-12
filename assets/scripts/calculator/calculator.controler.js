import DateTime from "./datetime.js";
import Screen from "./screen.js";
import Operation from "./operation.js";
export default class CalculatorControler {
    screen;
    operation;
    constructor(screen = new Screen(), operation = new Operation({
        onCalc: (result) => {
            this.screen.content = result;
        }
    })) {
        this.screen = screen;
        this.operation = operation;
        console.log(this.screen.content);
        this.screen.content = "123456789012";
        new DateTime();
        this.buttonsEvent();
    }
    buttonsEvent() {
        document.querySelectorAll('#teclado button').forEach(element => {
            element.addEventListener("click", (event) => {
                console.log(event);
                const target = event.target;
                switch (target.id) {
                    case 'zero':
                        this.addNumber(Number(target.dataset.valor));
                    case 'um':
                        this.addNumber(Number(target.dataset.valor));
                    case 'dois':
                        this.addNumber(Number(target.dataset.valor));
                    case 'tres':
                        this.addNumber(Number(target.dataset.valor));
                    case 'quatro':
                        this.addNumber(Number(target.dataset.valor));
                    case 'cinco':
                        this.addNumber(Number(target.dataset.valor));
                    case 'seis':
                        this.addNumber(Number(target.dataset.valor));
                    case 'sete':
                        this.addNumber(Number(target.dataset.valor));
                    case 'oito':
                        this.addNumber(Number(target.dataset.valor));
                    case 'nove':
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case 'adicao':
                        this.addOperator(target.dataset.valor);
                    case 'subtracao':
                        this.addOperator(target.dataset.valor);
                    case 'divisao':
                        this.addOperator(target.dataset.valor);
                    case 'multiplicacao':
                        this.addOperator(target.dataset.valor);
                        break;
                    case 'ponto':
                        break;
                    case 'limpar':
                        break;
                    case 'desfazer':
                        break;
                    case 'porcentagem':
                        break;
                    case 'igual':
                        this.calc();
                        break;
                }
            });
        });
    }
    calc() {
        this.operation.calc();
    }
    addOperation(value) {
        this.operation.add(value);
    }
    addNumber(number) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.operation.add(number.toString());
        }
        else {
            number = Number(this.operation.lastPosition.toString() + number.toString());
            this.operation.lastPosition = number.toString();
        }
        this.screen.content = number.toString();
    }
    addOperator(operator) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.operation.lastPosition = operator;
        }
        else {
            if (this.operation.length === 0)
                this.addOperation("0");
            this.addOperation(operator);
        }
    }
}
//# sourceMappingURL=calculator.controler.js.map