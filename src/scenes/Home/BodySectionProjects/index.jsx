import React from 'react'

import './index.scss'

import ProjectSlideshow from './ProjectSlideshow/ProjectSlideshow.jsx'

export default class BodySectionProjects extends React.PureComponent {
  render () {
    return (
      <div className='sec-projects flex-ccol'>
        <h1 className='sec-projects__title'>MY WORK</h1>

        <ProjectSlideshow />
      </div>
    )
  }
}
