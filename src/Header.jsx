import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  // constructor () {
  //   super()
  // }

  render () {
    return (
      <div>
        <span className="wrapper">
          <div className="button button-main">
            <Link to="/" className="no-nav-style"> CF12 </Link>
          </div>
          <div className="button button-about no-nav-style">
            <Link to="/about" className="no-nav-style"> ABOUT </Link>
          </div>
          <div className="button button-projects no-nav-style">
            <Link to="/projects" className="no-nav-style"> PROJECTS </Link>
          </div>
        </span>
      </div>
    )
  }
}

export default Header
