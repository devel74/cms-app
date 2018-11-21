import {observable} from "mobx"

class AdminMode {
  @observable isAdminView = true
  @observable isComponentPickerOpen = true
  @observable sections = {
    hero: ['HeroBanner'],
    headerLeft: ['BurgerMenu'],
    headerCenter: ['Logo'],
    headerRight: [],
    content: [],
    gamesMenu: []
  }
  @observable activeSection = 'hero'

  changeMode (value) {
    this.isAdminView = value
  }
  deleteComponent (name) {
    this.sections[this.activeSection].remove(name)
  }
  addComponent (name) {
    this.sections[this.activeSection].push(name)
  }
}

const adminMode = new AdminMode()

export default adminMode