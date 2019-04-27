import React from 'react'

import './index.scss'

import HighlightedTitle from 'components/HighlightedTitle'
import ProjectSlideshow from 'components/ProjectSlideshow'

import { ReactComponent as Bubbles } from 'assets/background/bubbles.svg'


export default class BodySectionProjects extends React.PureComponent {
  render () {
    return (
      <div className='sec-projects flex-ccol'>
        <div className='sec-projects__bg'>
          <Bubbles className='sec-projects__bg--left' />
          <Bubbles className='sec-projects__bg--right' />
        </div>

        <HighlightedTitle className='sec-projects__title'>
          MY WORK
        </HighlightedTitle>

        <ProjectSlideshow />
      </div>
    )
  }
}
