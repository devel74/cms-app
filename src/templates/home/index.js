import React, { Component } from 'react';
import './home.scss';
import Section from './../../components/Section'

class Home extends Component {
  render() {
    const template = 'home-template'
    return (
      <div className={template}>
        <header className={`${template}__header`}>
          <div className={`${template}__header-inner`}>
            <Section template={template} id={'headerLeft'}/>
            <Section template={template} id={'headerCenter'}/>
            <Section template={template} id={'headerRight'}/>
          </div>
        </header>
        <Section template={template} id={'hero'}/>
        <Section template={template} id={'gamesMenu'}/>
        <Section template={template} id={'content'}/>
      </div>
    );
  }
}

export default Home;
