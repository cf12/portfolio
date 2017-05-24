import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  constructor (top) {
    super()

    this.top = top
  }

  render () {
    return (
      <span className="wrapper-footer">
        <p className="disclaimer"> Copyright &copy; 2017 CF12 / Brian Xiang </p>
      </span>
    )
  }
}

export default Footer
