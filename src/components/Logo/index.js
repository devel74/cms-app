import svg from './img/logo.svg'

import React, { Component } from 'react'
import './Logo.scss'

class Logo extends Component {
  render () {
    return (
      <a href='/' className='logo'>
        <img src={svg} alt='Nano' />
      </a>
    )
  }
}

export default Logo
