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
      <div className='project'>

        <div className='flex--row flex--center--items'>
          <div className='project__image__border'>
            <img className='project__image' src={require('../../../../assets/images/lmao.png')} />
          </div>

          <p className='project__title'>{this.title}</p>
        </div>

        <p className='project__description'>{this.description}</p>
      </div>
    )
  }
}
