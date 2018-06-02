import React from 'react'

import './SkillEntry.scss'

export default class SkillEntry extends React.Component {
  constructor (props) {
    super()

    // this.iconPath = props.iconPath
    this.title = props.title
    this.desc = props.desc
  }

  render () {
    return (
      <div className='skill-entry__wrapper'>
        <p className='skill-entry__title'>{this.title}</p>
        <p className='skill-entry__desc'>{this.desc}</p>
      </div>
    )
  }
}
