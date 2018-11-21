import {observable} from "mobx"

class MainMenu {
  @observable isOpen = false
}

const mainMenu = new MainMenu()

export default mainMenu