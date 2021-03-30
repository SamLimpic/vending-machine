export default class Potion {
    constructor(name, cost, stock = 5, potency = 10, img = '//placehold.it/150x150') {
        this.name = name
        this.cost = cost
        this.stock = stock
        this.potency = potency
        this.img = img
    }
}