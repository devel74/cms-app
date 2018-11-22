import {observable} from 'mobx'

class Admin {
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
  componentsList = [
    {name: 'HeroBanner', summary: 'This is summary'},
    {name: 'BurgerMenu', summary: 'This is summary'},
    {name: 'Logo', summary: 'This is summary'}
  ]
  deleteComponent (name) {
    this.sections[this.activeSection].remove(name)
  }
  addComponent (name) {
    this.sections[this.activeSection].push(name)
  }
}

const admin = new Admin()

export default admin
