import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './AdminButton.scss'
import { withStyles } from '@material-ui/core/styles'
import core from '../../core'

import { observer } from 'mobx-react'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed'
  },
  input: {
    display: 'none'
  }
})

@observer
class AdminButton extends Component {
  render () {
    const isAdminView = core.admin.isAdminView

    return (
      <Button variant={'contained'} onClick={() => core.admin.changeMode(!isAdminView)} className={'admin-button btn btn-warning'}>
        {isAdminView ? 'Normal view' : 'Admin view'}
      </Button>
    )
  }
}

export default withStyles(styles)(AdminButton)
