import React from 'react'

import VideoPlayer from 'components/VideoPlayer/VideoPlayer.jsx'
import ToHomepageButton from 'components/ToHomepageButton/ToHomepageButton.jsx'
import ToTopButton from 'components/ToTopButton/ToTopButton.jsx'
import Footer from 'components/Footer/Footer.jsx'

import './ProjectPage.scss'

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
      <div className='project-page flex-center flex-col'>
        <ToHomepageButton />

        <div className='project-page__hero flex-center flex-col'>
          <h1 className='project-page__hero__title'>{this.content.title}</h1>
          <VideoPlayer
            className='project-page__video'
            width='1152px'
            height='648px'
            src={require(`assets/projects/${this.name}/video.webm`)}
            overlay />
        </div>

        <div className='project-page__body flex-center flex-row'>
          <div className='project-page__info-card'>
            <h4 className='project-page__info-card__title'>INFO</h4>
            <div className='project-page__info-card__divider' />

            <div className='project-page__info-card__entry-container'>
              <span className='project-page__info-card__entry'>
                {/* <FontAwesomeIcon icon={['far', 'clock']} size='2x' /> */}
                <p>Time - {this.content.info.time}</p>
              </span>

              <span className='project-page__info-card__entry'>
                {/* <FontAwesomeIcon icon={['far', 'calendar-plus']} size='2x' /> */}
                <p>Date Started - {this.content.info.startDate}</p>
              </span>

              <span className='project-page__info-card__entry'>
                {/* <FontAwesomeIcon icon={['far', 'calendar-check']} size='2x' /> */}
                <p>Date Finished - {this.content.info.endDate}</p>
              </span>
            </div>

          </div>

          <div className='project-page__paragraphs flex-col'>
            { this.content.content }
          </div>
        </div>

        <ToTopButton />
        <Footer />
      </div>
    )
  }
}
