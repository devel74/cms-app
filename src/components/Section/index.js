import React, { Component } from 'react';

import core from './../../core'
import HeroBanner from './../../components/HeroBanner'
import Logo from './../../components/Logo'
import BurgerMenu from './../../components/BurgerMenu'
import { observer } from 'mobx-react'

@observer
class Section extends Component {
  sections = core.adminMode.sections
  components = {
    HeroBanner: HeroBanner,
    Logo: Logo,
    BurgerMenu: BurgerMenu
  }
  getComponents (name) {
    const Component = this.components[name] || null
    return <Component key={name}/>
  }
  render() {
    const { id, template } = this.props
    const isActiveSection = core.adminMode.activeSection === id
    return (
      <section
        onClick={() => core.adminMode.activeSection = id}
        className={`section ${template}__section-${id} ${isActiveSection ? 'is-active': ''}`}
      >
        <div className="section-name">{id}</div>
        {this.sections[id]
          ? this.sections[id].map(name => this.getComponents(name))
          : null}
      </section>
    );
  }
}

export default Section;
