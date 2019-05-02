import React from 'react'

import './index.scss'

import Project from 'components/Project'

export default class BodySectionProjects extends React.PureComponent {
  render () {
    return (
      <div className='sec-projects'>

        <h5 className='sec-projects__sec-label'>#02</h5>
        <h1 className='sec-projects__title'>MY WORK</h1>

        <Project />
      </div>
    )
  }
}
