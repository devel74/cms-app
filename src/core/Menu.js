import {observable} from "mobx"

class Menu {
  @observable isOpen = false
}

const menu = new Menu()

export default menu