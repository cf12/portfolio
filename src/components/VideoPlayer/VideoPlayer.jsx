import React from 'react'

import './VideoPlayer.scss'

export default class VideoPlayer extends React.PureComponent {
  constructor (props) {
    super()

    this.toggleVideo = this.toggleVideo.bind(this)

    this.state = {
      playing: false
    }
  }

  toggleVideo () {
    if (this.state.playing) this.refs.video.pause()
    else this.refs.video.play()
    this.setState({ playing: !this.state.playing })
  }

  rewindVideo () {
    this.refs.video.pause()
    this.refs.video.currentTime = 0
  }

  render () {
    return (
      <div
        className={'video-player__container ' + this.props.className}
        onClick={this.toggleVideo} >

        <div className='video-player__control-overlay flex--center'>
          <div className={'video-player__control-button ' + (this.state.playing ? 'paused' : '')} />
        </div>
        <video
          className='video-player__video'
          ref='video'
          src={this.props.path}
          type='video/webm'
          muted loop
        />
      </div>
    )
  }
}
