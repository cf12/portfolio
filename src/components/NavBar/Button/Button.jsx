import React from 'react'
import { Link } from 'react-scroll'

import './Button.scss'

export default class Button extends React.Component {
  constructor (props) {
    super()

    this.name = props.name
    this.linkTo = props.linkTo
  }

  render () {
    return (
      <Link
        to={this.linkTo}
        smooth
        duration={300}
        className='button__frame flex--center' >

        <p className='button__text'>{this.name}</p>
      </Link>
    )
  }
}
