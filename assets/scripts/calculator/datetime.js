export default class DateTime {
    dateElement;
    timeElement;
    constructor(dateElement = document.querySelector("#datetime > div:nth-child(2)"), timeElement = document.querySelector("#datetime time")) {
        this.dateElement = dateElement;
        this.timeElement = timeElement;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    set data(content) {
        if (this.dateElement) {
            this.dateElement.innerHTML = content;
        }
    }
    set time(content) {
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
//# sourceMappingURL=datetime.js.map