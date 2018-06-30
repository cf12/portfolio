import React from 'react'
import OnLoadAnime from 'components/OnLoadAnime.jsx'

import './BodySectionSkills.scss'

import SkillEntry from './SkillEntry/SkillEntry.jsx'

export default class BodySectionSkills extends React.Component {
  render () {
    return (
      <div className='body__section body__section--skills flex--center'>
        <div className='body__title-wrapper flex--center flex--column'>
          <OnLoadAnime
            duration={600}
            delay={100}
            easing='easeOutElastic'
            translateY={[-100, 0]}
            opacity={[0, 1]} >

            <p className='body__title body__section--skills__title'>SKILLS</p>
            <div className='body__separator--big' />
          </OnLoadAnime>
        </div>

        <div className='body__section--skills__wrapper flex--center flex--row'>
          {
            skills.map((entry, index) => {
              return <SkillEntry key={index} index={index} title={entry.title} desc={entry.description} />
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
