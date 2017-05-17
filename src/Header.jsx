import React, { Component } from 'react'
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
            <p> CF12 </p>
          </div>
          <div className="button button-about">
            <p> ABOUT </p>
          </div>
          <div className="button button-projects">
            <p> PROJECTS </p>
          </div>
        </span>
      </div>
    )
  }
}

export default Header
