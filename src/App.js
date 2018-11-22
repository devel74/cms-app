import './styles/App.scss'
import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
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
      <MuiThemeProvider theme={theme}>
        <div className={this.className}>
          <AdminBar />
          <HomeTemplate />
          <AdminButton />
          <ComponentPicker />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
