import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import './fonts/SourceSansPro-Regular.ttf'

class Header extends Component {
  // constructor () {
  //   super()
  // }

  render () {
    return (
      <div>
        <span className="wrapper">
          <div className="button button-main no-nav-style">
            <Link to="/"> CF12 </Link>
          </div>
          <div className="button button-about no-nav-style">
            <Link to="/about"> ABOUT </Link>
          </div>
          <div className="button button-projects no-nav-style">
            <Link to="/projects"> PROJECTS </Link>
          </div>
        </span>
      </div>
    )
  }
}

export default Header
