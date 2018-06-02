import React from 'react'

import './Button.scss'

export default class Button extends React.Component {
  constructor (props) {
    super()

    this.name = props.name
  }

  render () {
    return (
      <div className='button__frame'>
        <div className='button__inner-frame'>
          <p className='button__text'>{this.name}</p>
        </div>
      </div>
    )
  }
}
