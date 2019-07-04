import React from 'react'

import './index.scss'

import Project from 'components/Project'

import projects from 'assets/projects/projects.json'

export default class BodySectionProjects extends React.PureComponent {
  render () {
    return (
      <div className='sec-projects'>
        <h5 className='title-label'>#02</h5>
        <h1 className='title'>MY WORK</h1>

        <div className='sec-projects__projects'>
          {
            Object.keys(projects).map((key) => {
              return <Project name={key} />
            })
          }
        </div>
      </div>
    )
  }
}
