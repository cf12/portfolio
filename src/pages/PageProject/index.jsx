import React from 'react'

import HighlightedText from 'components/HighlightedText'
import BackButton from 'components/BackButton'
import VideoPlayer from 'components/VideoPlayer/VideoPlayer.jsx'
import ToTopButton from 'components/ToTopButton/ToTopButton.jsx'
import Footer from 'components/Footer'

import './index.scss'

export default class Project extends React.Component {
  constructor (props) {
    super()

    this.name = props.name
    this.content = props.content
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  playVideo () {
    this.refs.video.play()
  }

  rewindVideo () {
    this.refs.video.pause()
    this.refs.video.currentTime = 0
  }

  render () {
    return (
      <div className='proj-page flex-center flex-col'>
        <BackButton />

        <div className='proj-page__hero flex-center flex-col'>
          <HighlightedText
            className='proj-page__hero__title'
            bgColor='white'
          >
            {this.content.title.toUpperCase()}
          </HighlightedText>

          <VideoPlayer
            className='proj-page__video'
            width='1152px'
            height='648px'
            src={require(`assets/projects/${this.name}/video.webm`)}
            overlay />
        </div>

        <div className='proj-page__body flex-center flex-row'>
          <div className='proj-page__body__paragraphs flex-col'>
            { this.content.content }
          </div>
        </div>

        <ToTopButton />
        <Footer />
      </div>
    )
  }
}
