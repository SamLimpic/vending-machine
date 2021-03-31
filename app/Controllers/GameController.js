import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GameService.js";

function _draw() {
    let money = ProxyState.state.money
    let health = ProxyState.state.health
    let mana = ProxyState.state.mana
    let stamina = ProxyState.state.stamina
    let potion = ProxyState.state.potions
    let player = "/assets/img/player.png"
    if ((ProxyState.state.health <= 33) || (ProxyState.state.mana <= 33) || (ProxyState.state.stamina <= 33)) {
        player = "/assets/img/player-33.png"
    } else if ((ProxyState.state.health <= 66) || (ProxyState.state.mana <= 66) || (ProxyState.state.stamina <= 66)) {
        player = "/assets/img/player-66.png"
    } else {
        player = "/assets/img/player.png"
    }
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
    document.getElementById('patron-img').innerHTML = `
        <button class='btn btn-warning text-light my-4 align-middle'>
            <h5 class="mt-1"><strong>GOLD: ${ProxyState.state.money} </strong></h5>
        </button>
        <img class="w-100 pt-2" src="${player}" alt="">
    `
    document.getElementById('shop').innerHTML = `
            <div class="col-3 card card-border shadow bg-gray text-dark text-center p-3 m-3">
                    <img class="my-3" src="${potion[0].img}" alt="">
                    <h3><strong><u>${potion[0].cost}</strong> Gold</u></h3>
                    <h4><strong>${potion[0].stock}</strong> Left!</h4>
            </div>
            <div class="col-3 card card-border shadow bg-gray text-dark text-center p-3 m-3">
                    <img class="my-3" src="${potion[1].img}" alt="">
                    <h3><strong><u>${potion[1].cost}</strong> Gold</u></h3>
                    <h4><strong>${potion[1].stock}</strong> Left!</h4>
            </div>
            <div class="col-3 card card-border shadow bg-gray text-dark text-center p-3 m-3">
                    <img class="my-3" src="${potion[2].img}" alt="">
                    <h3><strong><u>${potion[2].cost}</strong> Gold</u></h3>
                    <h4><strong>${potion[2].stock}</strong> Left!</h4>
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

    sell(num, type) {
        gameService.sell(num, type)
    }

}