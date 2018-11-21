import React, { Component } from 'react';

import classNames  from 'classnames'

import core from './../../core'
import HeroBanner from './../../components/HeroBanner'
import Logo from './../../components/Logo'
import BurgerMenu from './../../components/BurgerMenu'
import { observer } from 'mobx-react'

@observer
class Section extends Component {
  sections = core.admin.sections
  components = {
    HeroBanner: HeroBanner,
    Logo: Logo,
    BurgerMenu: BurgerMenu
  }
  getComponents (name) {
    const Component = this.components[name] || null
    return <Component key={name}/>
  }
  setActiveSection (id) {
    if (!core.admin.isAdminView) return null
    core.admin.activeSection = id
  }
  classNames () {
    const { template, id } = this.props
    const isActiveSection = core.admin.activeSection === id
    return classNames('section', `${template}__section-${id}`, {'is-active': isActiveSection})
  }

  render() {

    const { id } = this.props
    return (
      <section
        onClick={() => this.setActiveSection(id)}
        className={this.classNames()}
      >
        <div className='section-name'>{id}</div>
        {this.sections[id]
          ? this.sections[id].map(name => this.getComponents(name))
          : null}
      </section>
    );
  }
}

export default Section;
