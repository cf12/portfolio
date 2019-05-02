import React, { Component } from 'react'

import './index.scss'

export default class index extends Component {
  render () {
    return (
      <div className='project'>
        <img src={require('assets/images/project.png')} alt='' />
      </div>
    )
  }
}
