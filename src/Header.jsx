import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ScrollChor from 'react-scrollchor'

class Header extends Component {
  render () {
    return (
      <span className='wrapper-header'>
        <div className='button no-nav-style' id='button-main'>
          <Link to='' className='no-nav-style'> CF12 </Link>
        </div>
        <div className='button no-nav-style'>
          <ScrollChor to='#about' animate={{ duration: 600 }} className='no-nav-style'> ABOUT </ScrollChor>
        </div>
        <div className='button no-nav-style'>
          <ScrollChor to='#projects' animate={{ offset: -18, duration: 600 }} className='no-nav-style'> PROJECTS </ScrollChor>
        </div>
        <div className='button no-nav-style'>
          <ScrollChor to='#social' animate={{ duration: 600 }} className='no-nav-style'> SOCIAL </ScrollChor>
        </div>
      </span>
    )
  }
}

export default Header
