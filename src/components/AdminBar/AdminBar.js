import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './AdminBar.scss'

const AdminBar = () => {
  return (
    <div className={'admin-bar'}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AdminBar
