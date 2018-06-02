import React from 'react'

import './BodySectionProjects.scss'

import Project from './Project/Project.jsx'

export default class BodySectionProjects extends React.Component {
  render () {
    return (
      <div className='body__section body__section--story flex--center'>
        <p className='body__title'>PROJECTS</p>
        <div className='body__separator--big' />

        <Project title='Hello World!' description='Lorem Ipsum' />

      </div>
    )
  }
}
