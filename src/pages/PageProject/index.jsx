import React from 'react'
import ReactMarkdown from 'react-markdown'

import BackButton from 'components/BackButton'
import VideoPlayer from 'components/VideoPlayer'
import ToTopButton from 'components/ToTopButton'
import Footer from 'components/Footer'

import './index.scss'

import projects from 'assets/projects/projects.json'

export default class Project extends React.Component {
  constructor (props) {
    super()

    this.name = props.name

    const project = projects[this.name]
    this.title = project.title

    this.state = {
      content: null
    }
  }

  componentWillMount () {
    fetch(require(`assets/projects/${this.name}/body.md`))
      .then(res => res.text())
      .then(text => {
        this.setState({
          content: text
        })
      })
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
      <div className='proj-page flex-ccol'>
        <BackButton />

        <div className='proj-page__hero flex-ccol'>
          <h1 className='proj-page__hero__title'>
            {this.title}
          </h1>

          <VideoPlayer
            className='proj-page__video'
            width='1152px'
            height='648px'
            src={require(`assets/projects/${this.name}/video.webm`)}
            overlay
          />
        </div>

        <div className='proj-page__content'>
          <ReactMarkdown source={this.state.content} />
        </div>

        <ToTopButton />
        <Footer />
      </div>
    )
  }
}
