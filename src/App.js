import './styles/App.scss'
import React, { Component } from 'react'
import HomeTemplate from './templates/home'
import AdminButton from './components/AdminButton'
import ComponentPicker from './components/ComponentPicker'
import AdminBar from './components/AdminBar/AdminBar'
import { observer } from 'mobx-react'
import core from './core'

@observer
class App extends Component {
  get className () {
    return `main ${core.admin.isAdminView ? 'is-admin-view' : ''} ${core.menu.isOpen ? 'is-menu-open' : ''}`
  }
  render () {
    return (
      <div className={this.className}>
        <AdminBar />
        <HomeTemplate />
        <AdminButton />
        <ComponentPicker />
      </div>
    )
  }
}

export default App
