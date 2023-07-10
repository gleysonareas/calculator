import DateTime from "./datetime.js";
import Screen from "./screen.js";
import Operation from "./operation.js";

export default class CalculatorControler {
  constructor(
    private screen = new Screen(),
    private operation = new Operation()
  ) {
    // super();
    // console.log("Calculator Controler")
    console.log(this.screen.content);
    this.screen.content = "123456789012";
    new DateTime();
  }

  buttonsEvent() {
    document.querySelectorAll('#teclado button').forEach(element => {
      element.addEventListener("click", (event: Event) => {
        console.log(event);
        const target = event.target as HTMLButtonElement;
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
            break
          case 'adicao':
            this.addOperator(target.dataset.valor as string);
          case 'subtracao':
            this.addOperator(target.dataset.valor as string);
          case 'divisao':
            this.addOperator(target.dataset.valor as string);
          case 'multiplicacao':
            this.addOperator(target.dataset.valor as string);
            break
          case 'ponto':
            break
          case 'limpar':
            break
          case 'desfazer':
            break
          case 'porcentagem':
            break
          case 'igual':
            break
        }
      })
    });
  }

  addOperation(value: string): void {
    this.operation.add(value);
  }

  addNumber(number: number): void {
    this.screen.content = number.toString();
    this.operation.add(number.toString());
  }

  addOperator(operator: string): void {
    this.addOperation(operator)
  }
}