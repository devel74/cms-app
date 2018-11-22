import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import avatarImg from './img/default-avatar.png'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import './AdminBar.scss'
import core from '../../core'

class AdminBar extends Component {
  get renderAddButton () {
    return (
      <div className='admin-bar__buttons'>
        <Button
          onClick={() => (core.admin.isComponentPickerOpen = !core.admin.isComponentPickerOpen)}
          color='inherit'
        >
          Add Component<AddIcon />
        </Button>
      </div>
    )
  }
  render () {
    return (
      <div className={'admin-bar'}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            {this.renderAddButton}
            <Typography variant='h6' color='inherit'>Hi, Admin!</Typography>
            <Avatar alt='Admin' src={avatarImg} className={'admin-bar__avatar'} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default AdminBar
