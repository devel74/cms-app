import React, { Component } from 'react'
import './index.scss'
import core from '../../core'
import { observer } from 'mobx-react'

@observer
class ComponentPicker extends Component {
  render () {
    const components = [
      {name: 'HeroBanner'},
      {name: 'BurgerMenu'},
      {name: 'Logo'}
    ]
    const isOpen = core.admin.isComponentPickerOpen
    const { sections, activeSection } = core.admin
    return (
      <div>
        <div className={`component-picker ${isOpen ? 'is-opened' : ''}`}>
          <p>
            <i>Current section: </i>{activeSection}<br />
            <ul className={'nav flex-column'}>
              {sections[activeSection].map((name) => (
                <li onClick={() => core.admin.deleteComponent(name)} className={'nav-item'} key={name}>
                  Delete {name}
                </li>
              ))}
            </ul>
          </p>
          <p>
            Add Components:
            <ul className={'nav flex-column'}>
              {components.map((item) => (
                <li onClick={() => core.admin.addComponent(item.name)} className={'nav-item'} key={item.name}>{item.name}</li>
              ))}
            </ul>
          </p>
        </div>
        <div onClick={() => (core.admin.isComponentPickerOpen = !isOpen)} className='btn btn-info component-picker__button'>
          Components picker
        </div>
      </div>
    )
  }
}

export default ComponentPicker
