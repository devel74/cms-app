import React, { Component } from 'react';
import './AdminButton.scss';
import core from '../../core'

import { observer } from 'mobx-react'

@observer
class AdminButton extends Component {
  render() {
    const isAdminView = core.admin.isAdminView

    return (
      <button onClick={() => core.admin.changeMode(!isAdminView)} className={'admin-button btn btn-warning'}>
        {isAdminView ? 'Normal view' : 'Admin view'}
      </button>
    );
  }
}

export default AdminButton;
