import React from 'react'

import './Project.scss'

export default class Project extends React.PureComponent {
  constructor (props) {
    super()

    this.playVideo = () => {
      this.refs.video.play()
    }

    this.rewindVideo = () => {
      this.refs.video.pause()
      this.refs.video.currentTime = 0
    }

    this.title = props.title
    this.description = props.description
    this.name = props.name
  }

  render () {
    return (
      <a
        href='/asd'
        className='project flex--center flex--column'
        onMouseEnter={this.playVideo}
        onMouseLeave={this.rewindVideo}
      >
        <video
          className='project__video'
          ref='video'
          src={`assets/projects/${this.name}/video.webm`}
          type='video/mp4'
          muted loop
        />
        <img
          className='project__background'
          src={require(`assets/projects/${this.name}/background.jpg`)}
          ref='background'
        />

        <div className='project__overlay-wrapper flex--center flex--column' ref='overlayWrapper'>
          <p className='project__title'>{this.title}</p>
          <p className='project__description'>{this.description}</p>
        </div>
      </a>
    )
  }
}
