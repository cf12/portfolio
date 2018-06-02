import React from 'react'

import './BodySectionSkills.scss'

import SkillEntry from './SkillEntry/SkillEntry.jsx'

export default class BodySectionSkills extends React.Component {
  render () {
    return (
      <div className='body__section body__section--skills flex--center'>
        <p className='body__title'>SKILLS</p>
        <div className='body__separator--big' />

        <div className='body__section--skills__wrapper flex--center flex--row'>
          {
            skills.map((entry) => {
              return <SkillEntry title={entry.title} desc={entry.description} />
            })
          }
        </div>
      </div>
    )
  }
}

const skills = [
  {
    title: 'Web Stack (JavaScript, HTML, CSS)',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
  },
  {
    title: 'Python',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
  },
  {
    title: 'Java',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
  },
  {
    title: 'C / C++',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
  },
  {
    title: 'C / C++',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
  },
  {
    title: 'C / C++',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
  }
]
