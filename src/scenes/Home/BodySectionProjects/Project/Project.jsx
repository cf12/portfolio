import React from 'react'

import './Project.scss'

export default class ProjectEntry extends React.PureComponent {
  constructor (props) {
    super()

    this.state = {
      title: props.title,
      description: props.description,
      fileName: props.fileName
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      title: newProps.title,
      description: newProps.description,
      fileName: newProps.fileName
    })
  }

  render () {
    return (
      <div className='project flex--center flex--column'>
        <img className='project__background' src={require('../../../../assets/images/projects/project1.jpg')} />

        <div className='project__text-wrapper flex--center flex--column'>
          <p className='project__title'>{this.state.title}</p>
          <p className='project__description'>{this.state.description}</p>
        </div>
      </div>
    )
  }
}
