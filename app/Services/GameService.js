import { ProxyState } from "../AppState.js"

class GameService {

    buy(num, type) {
        if ((ProxyState.state.money > ProxyState.state.potions[num].cost) && (ProxyState.state.potions[num].stock != 0)) {
            ProxyState.state.potions[num].stock -= 1
            ProxyState.state.money -= ProxyState.state.potions[num].cost
            ProxyState.state[type] += ProxyState.state.potions[num].potency
        }
        ProxyState.state = ProxyState.state
    }

    sell(type) {
        if (ProxyState.state[type] > 10) {
            ProxyState.state[type] -= 10
            ProxyState.state.money += 10
            ProxyState.state = ProxyState.state
        }
    }

}
export const gameService = new GameService()