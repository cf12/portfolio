import React from 'react'

import OnLoadAnime from 'components/OnLoadAnime.jsx'

import SkillEntry from './SkillEntry/SkillEntry.jsx'

import './BodySectionSkills.scss'

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
              return <SkillEntry key={index} index={index} {...entry} />
            })
          }
        </div>
      </div>
    )
  }
}

const skills = [
  {
    title: 'HTML',
    iconName: 'html5'
  },
  {
    title: 'CSS',
    iconName: 'css3'
  },
  {
    title: 'JavaScript',
    iconName: 'javascript'
  },
  {
    title: 'NodeJS',
    iconName: 'nodejs'
  },
  {
    title: 'Sass',
    iconName: 'sass'
  },
  {
    title: 'ReactJS',
    iconName: 'react'
  },
  {
    title: 'Python',
    iconName: 'python',
  },
  {
    title: 'Java',
    iconName: 'java',
  },
  {
    title: 'C / C++',
    iconName: 'c',
  },
  {
    title: 'Adobe Photoshop',
    iconName: 'photoshop',
  },
  {
    title: 'Adobe Premiere Pro',
    iconName: 'premiere',
  }
]
