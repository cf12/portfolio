import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <span className="wrapper-footer">
        <p className="disclaimer"> Copyright &copy; 2017 CF12 / Brian Xiang </p>
      </span>
    )
  }
}

export default Footer
