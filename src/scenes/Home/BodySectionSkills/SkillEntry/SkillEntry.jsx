import React from 'react'

import OnLoadAnime from 'components/OnLoadAnime.jsx'

import './SkillEntry.scss'

const SkillEntry = (props) => {
  return (
    <div className='skill-entry__container flex--column'>
      <OnLoadAnime
        duration={800}
        delay={(props.index + 1) * 80}
        easing='easeOutElastic'
        scale={[0.1, 1]}
        opacity={[0, 1]} >

        <div className='flex--center flex--column'>
          <img
            className='skill-entry__icon'
            src={require(`assets/icons/devicons/${props.iconName}.svg`)}
            alt='' />

          <h3 className='skill-entry__title'>{props.title}</h3>
        </div>
      </OnLoadAnime>
    </div>
  )
}

export default SkillEntry
