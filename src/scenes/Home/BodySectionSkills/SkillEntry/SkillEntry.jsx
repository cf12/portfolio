import React from 'react'
import OnLoadAnime from '../../../../components/OnLoadAnime.jsx'

import './SkillEntry.scss'

export default class SkillEntry extends React.Component {
  constructor (props) {
    super()

    this.iconName = props.iconName
    this.index = props.index
    this.title = props.title
    this.desc = props.desc
  }

  render () {
    return (
      <div className='skill-entry__wrapper'>
        <OnLoadAnime
          duration={800}
          delay={(this.index + 1) * 80}
          easing='easeOutElastic'
          scale={[0.1, 1]}
          opacity={[0, 1]} >

          <div className='skill-entry__container'>
            <p className='skill-entry__title'>{this.title}</p>
            <p className='skill-entry__desc'>{this.desc}</p>
          </div>
        </OnLoadAnime>
      </div>
    )
  }
}
