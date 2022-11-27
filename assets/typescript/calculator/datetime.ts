export default class DateTime {
  constructor(
    private dateElement: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
    private timeElement: HTMLTimeElement | null = document.querySelector("#datetime time")
  ) {
    this.render();
    setInterval(() => this.render(), 1000);
  }

  set data(content: string) {
    if (this.dateElement) {
      this.dateElement.innerHTML = content;
    }
  }

  set time(content: string) {
    if (this.timeElement) {
      this.timeElement.innerHTML = content;
    }
  }

  render() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleDateString("pt-br", { month: "long" });
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");

    const twoPoints = currentDate.getSeconds() % 2 === 0 ? ":" : " ";
    this.data = `${day} ${month} ${year}`;
    this.time = `${hours}${twoPoints}${minutes}`;
  }
}

// Dica: Para pegar o tipo de um elemento da dom atraves do console no devtools basta utilizar o seguinte
// comando como exemplo: 'dir(document.querySelector("#datetime time"))' dessa maneira iremos obter como
// resultado o objeto DOM por tras do Elemento HTML.

// Biblioteca indicada para trabalhar com Data 'date-fns' essa lib trabalha olhando para o objeto date
// nativo do DOM, ainda possui uma performance melhor que a do moment que foi depreciado.

