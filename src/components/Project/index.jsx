import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import projects from 'assets/projects/projects.json'

const Project = (props) => {
  const { title } = projects[props.name]

  return (
    <Link className='project' to={`/projects/${props.name}`}>
      <div className='project__container'>
        <img
          src={require(`assets/projects/${props.name}/thumbnail.png`)}
          alt=''
        />

        <div className='project__container__active'>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Project