import React from 'react'
import OnLoadAnime from '../../../components/OnLoadAnime.jsx'

import './BodySectionProjects.scss'

import ProjectSlideshow from './ProjectSlideshow/ProjectSlideshow.jsx'

export default class BodySectionProjects extends React.PureComponent {
  render () {
    return (
      <div className='body__section flex--center'>
        <div className='body__title-wrapper flex--center flex--column'>
          <OnLoadAnime
            key='title'
            duration={600}
            delay={100}
            easing='easeOutElastic'
            translateY={[-100, 0]}
            opacity={[0, 1]} >

            <p className='body__title'>PROJECTS</p>
            <div className='body__separator--big' />
          </OnLoadAnime>
        </div>

        <ProjectSlideshow />
      </div>
    )
  }
}
