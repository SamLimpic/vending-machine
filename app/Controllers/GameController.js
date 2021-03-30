import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GameService.js";

function _draw() {
    let money = ProxyState.state.money
    let health = ProxyState.state.health
    let mana = ProxyState.state.mana
    let stamina = ProxyState.state.stamina
    let potion = ProxyState.state.potions
    document.getElementById('patron').innerHTML = `
        <div class="row justify-content-around my-3 text-center">
        <div class="col-10">
            <div class="card shadow bg-danger py-3" style="width: ${health}%"></div>
        </div>
        </div>
        <div class="row justify-content-around my-3 text-center">
        <div class="col-10">
            <div class="card shadow bg-primary py-3" style="width: ${mana}%"></div>
        </div>
        </div>
        <div class="row justify-content-around my-3 text-center">
        <div class="col-10">
            <div class="card shadow bg-success py-3" style="width: ${stamina}%"></div>
        </div>
        </div>
    `
    document.getElementById('shop').innerHTML = `
            <div class="col-3 card shadow p-3 m-3">
                    <img class="my-3" src="${potion[0].img}" alt="">
                    <h3>${potion[0].cost} Gold</h3>
                    <h4>${potion[0].stock} Left!</h4>
            </div>
            <div class="col-3 card shadow p-3 m-3">
                    <img class="my-3" src="${potion[1].img}" alt="">
                    <h3>${potion[1].cost} Gold</h3>
                    <h4>${potion[1].stock} Left!</h4>
            </div>
            <div class="col-3 card shadow p-3 m-3">
                    <img class="my-3" src="${potion[2].img}" alt="">
                    <h3>${potion[2].cost} Gold</h3>
                    <h4>${potion[2].stock} Left!</h4>
            </div>
    `
}


export default class GameController {
    constructor() {
        ProxyState.on('state', _draw)
        _draw()
    }

    buy(num, type) {
        gameService.buy(num, type)
    }

    sell(type) {
        gameService.sell(type)
    }

}