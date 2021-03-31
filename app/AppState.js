import Potion from "./Models/Potion.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  state = {
    money: 0,
    health: 100,
    mana: 100,
    stamina: 100,
    potions: [
      new Potion("Health", 20, 'assets/img/health.png'),
      new Potion("Mana", 15, 'assets/img/mana.png'),
      new Potion("Stamina", 10, 'assets/img/stamina.png')
    ],
  }
}

// NOTE Magic... no touchy!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})