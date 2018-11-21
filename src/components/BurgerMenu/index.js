import React, { Component } from 'react';
import { observer } from 'mobx-react'
import core from '../../core'
import './index.scss';

@observer
class Index extends Component {
  render() {
    const isOpen = core.menu.isOpen
    return (
      <div className={'burger-menu'}>
        <i onClick={() => core.menu.isOpen = !isOpen} className="fas fa-align-justify sz-md" />
      </div>
    );
  }
}

export default Index;
