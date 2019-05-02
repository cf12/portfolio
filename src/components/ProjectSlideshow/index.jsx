import React from 'react'

import './index.scss'

import Project from './Project/'

import projects from 'assets/projects/projects.js'

export default class ProjectSlideshow extends React.PureComponent {
  constructor () {
    super()

    this.nextProject = () => {
      this.setState({
        index: (this.state.index === this.projectsLength - 1)
          ? 0
          : this.state.index + 1,
      })
    }

    this.prevProject = () => {
      this.setState({
        index: (this.state.index === 0)
          ? this.projectsLength - 1
          : this.state.index - 1,
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
      index: 0
    }
  }

  goto (index) {
    this.setState({
      index: index
    })
  }

  render () {
    return (
      <div className='slideshow flex-ccol'>
        <div className='flex-center'>
          {/* <FaChevronLeft
            className='slideshow__button slideshow__button--left'
            onClick={this.prevProject}
          /> */}

          {/* <div className='slideshow__container'>
            { this.projects[this.state.index] }
          </div> */}

          {/* <FaChevronRight
            className='slideshow__button slideshow__button--right'
            onClick={this.nextProject}
          /> */}
        </div>

        <div className='slideshow__counter flex-center flex-row'>
          {
            this.projects.map((entry, index) => {
              return (this.state.index === index)
                ? <div
                  key={index}
                  onClick={() => { this.goto(index) }}
                  className='slideshow__counter__button slideshow__counter__button--selected' />
                : <div
                  key={index}
                  onClick={() => { this.goto(index) }}
                  className='slideshow__counter__button slideshow__counter__button--unselected' />
            })
          }
        </div>
      </div>
    )
  }
}
