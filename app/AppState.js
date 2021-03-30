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
      new Potion("Health", 15),
      new Potion("Mana", 20),
      new Potion("Stamina", 10)
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