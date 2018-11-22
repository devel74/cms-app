import React, { Component } from 'react'
import './home.scss'
import Section from './../../components/Section'

class Home extends Component {
  template = 'home-template'
  get renderHeader () {
    return (
      <header className={`${this.template}__header`}>
        <div className={`${this.template}__header-inner`}>
          <Section template={this.template} id={'headerLeft'} />
          <Section template={this.template} id={'headerCenter'} />
          <Section template={this.template} id={'headerRight'} />
        </div>
      </header>
    )
  }
  renderSection (name) {
    return (
      <Section template={this.template} id={name} />
    )
  }
  render () {
    return (
      <div className={this.template}>
        {this.renderHeader}
        {this.renderSection('hero')}
        {this.renderSection('gamesMenu')}
        {this.renderSection('content')}
      </div>
    )
  }
}

export default Home
