import React from 'react'

import './index.scss'

import HighlightedText from '../../../components/HighlightedText'

import ProjectSlideshow from 'components/ProjectSlideshow'

export default class BodySectionProjects extends React.PureComponent {
  render () {
    return (
      <div className='sec-projects flex-ccol'>
        <HighlightedText className='sec-projects__title'>
          MY WORK
        </HighlightedText>

        <ProjectSlideshow />
      </div>
    )
  }
}
