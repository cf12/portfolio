import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import OnLoadAnime from '../../../components/OnLoadAnime.jsx'

import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './BodySectionProjects.scss'

import Project from './Project/Project.jsx'

fontawesome.library.add(faChevronCircleRight, faChevronCircleLeft)

export default class BodySectionProjects extends React.Component {
  constructor () {
    super()

    this.nextProject = () => {
      this.setState({
        index: (this.state.index === this.projectsLength - 1) ? this.projectsLength - 1 : this.state.index + 1
      })
    }

    this.prevProject = () => {
      this.setState({
        index: (this.state.index === 0) ? 0 : this.state.index - 1
      })
    }

    this.projectsLength = Object.keys(projects).length

    this.projects = projects.map((value, index) =>
      <Project key={index} title={value.title} description={value.description} name={value.name} />)

    this.state = {
      index: 0
    }
  }

  render () {
    return (
      <div className='body__section flex--center'>
        <OnLoadAnime
          duration={600}
          delay={100}
          easing='easeOutElastic'
          translateY={[-100, 0]}
          opacity={[0, 1]} >

          <p className='body__title'>PROJECTS</p>
          <div className='body__separator--big' />
        </OnLoadAnime>

        <div className='flex--center flex--row'>
          <FontAwesomeIcon
            icon='chevron-circle-left'
            size='4x'
            className='slideshow__button'
            onClick={this.prevProject}
          />

          { this.projects[this.state.index] }

          <FontAwesomeIcon
            icon='chevron-circle-right'
            size='4x'
            className='slideshow__button'
            onClick={this.nextProject}
          />
        </div>

      </div>
    )
  }
}

const projects = [
  {
    title: 'Hello World!',
    description: 'Lorem Ipsum',
    name: 'project1'
  },
  {
    title: 'Hello Other World!',
    description: 'Lorem',
    name: 'project2'
  },
  {
    title: 'Hello Another World!',
    description: 'Ipsum',
    name: 'project3'
  }
]
