import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import OnLoadAnime from 'components/OnLoadAnime.jsx'

import './ProjectSlideshow.scss'

import Project from './Project/Project.jsx'

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

    this.projectsLength = Object.keys(projects).length

    this.projects = projects.map((value, index) =>
      <Project key={index} title={value.title} description={value.description} name={value.name} />)

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
      <div>
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
