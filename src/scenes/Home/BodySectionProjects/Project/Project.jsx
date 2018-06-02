import React from 'react'

import './Project.scss'

export default class ProjectEntry extends React.Component {
  constructor (props) {
    super()

    this.title = props.title
    this.description = props.description
  }

  render () {
    return (
      <div className='project flex--column flex--center'>
        <div className='project__image-wrapper'>
          <img src={require('../../../../assets/images/lmao.png')} />
        </div>

        <p className='project__title'>{this.title}</p>
        <p className='project__description'>{this.description}</p>
      </div>
    )
  }
}
