export default class Potion {
    constructor(name, cost, img = '/assets/img/empty.png', stock = 5, potency = 10,) {
        this.name = name
        this.cost = cost
        this.img = img
        this.stock = stock
        this.potency = potency
    }
}