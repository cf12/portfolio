import React from 'react'
import OnLoadAnime from 'components/OnLoadAnime.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Project from './Project/Project.jsx'

import './ProjectSlideshow.scss'

import projects from 'assets/projects/projects.js'

export default class ProjectSlideshow extends React.PureComponent {
  constructor () {
    super()

    this.nextProject = () => {
      this.setState({
        index: (this.state.index === this.projectsLength - 1) ? 0 : this.state.index + 1,
        direction: {
          x: [300, 0],
          y: [0, 0]
        }
      })
    }

    this.prevProject = () => {
      this.setState({
        index: (this.state.index === 0) ? this.projectsLength - 1 : this.state.index - 1,
        direction: {
          x: [-300, 0],
          y: [0, 0]
        }
      })
    }

    this.projects = []

    Object.keys(projects).forEach(key => {
      const entry = projects[key]

      this.projects.push(
        <Project key={key} title={entry.title} description={entry.description} name={key} />
      )
    })

    this.projectsLength = Object.keys(projects).length

    this.state = {
      index: 0,
      direction: {
        x: [0, 0],
        y: [-200, 0]
      }
    }
  }

  goto (index) {
    let direction

    if (index > this.state.index) {
      direction = {
        x: [300, 0],
        y: [0, 0]
      }
    } else {
      direction = {
        x: [-300, 0],
        y: [0, 0]
      }
    }

    this.setState({
      index: index,
      direction: direction
    })
  }

  render () {
    return (
      <div className='flex--center flex--column'>
        <div className='flex--center flex--row'>
          <FontAwesomeIcon
            icon='chevron-circle-left'
            size='4x'
            className='slideshow__button slideshow__button--left'
            onClick={this.prevProject}
          />

          <div className='slideshow__container'>
            <OnLoadAnime
              key={this.state.index}
              duration={500}
              easing='easeOutQuint'
              translateX={this.state.direction.x}
              translateY={this.state.direction.y}
              opacity={[0, 1]} >
              <div>
                { this.projects[this.state.index] }
              </div>
            </OnLoadAnime>
          </div>

          <FontAwesomeIcon
            icon='chevron-circle-right'
            size='4x'
            className='slideshow__button slideshow__button--right'
            onClick={this.nextProject}
          />
        </div>

        <div className='slideshow__counter flex--center flex--row'>
          {
            this.projects.map((entry, index) => {
              return (this.state.index === index)
                ? <div
                  key={index}
                  onClick={() => { this.goto(index) }}
                  className='slideshow__counter__button--selected' />
                : <div
                  key={index}
                  onClick={() => { this.goto(index) }}
                  className='slideshow__counter__button--unselected' />
            })
          }
        </div>
      </div>
    )
  }
}
