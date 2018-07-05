import React from 'react'
import OnLoadAnime from 'components/OnLoadAnime.jsx'

import './BodySectionStory.scss'

export default class BodySectionStory extends React.Component {
  render () {
    return (
      <div className='body__section body__section--story flex--center'>
        <div className='body__title-wrapper flex--center flex--column'>
          <OnLoadAnime
            duration={600}
            delay={100}
            easing='easeOutElastic'
            translateY={[-100, 0]}
            opacity={[0, 1]} >

            <p className='body__title'>MY STORY</p>
            <div className='body__separator--big' />
          </OnLoadAnime>
        </div>

        <div className='body__wrapper--story flex--row'>
          <div className='body__avatar'>
            <OnLoadAnime
              duration={800}
              delay={300}
              easing='easeOutElastic'
              scale={[0.2, 1]}
              rotate={[-10, 0]}
              opacity={[0, 1]} >

              <img src={require('../../../assets/images/avatar.png')} />
            </OnLoadAnime>
          </div>

          <div className='flex--center flex--column'>
            <OnLoadAnime
              duration={600}
              delay={200}
              easing='easeOutElastic'
              translateX={[200, 0]}
              opacity={[0, 1]} >

              <div className='body__paragraph'>
                <p>
                  Hey! My name is Brian Xiang. I am a high school sophomore, who's working to pursue a
                  career in Web Development and Computer Science. I've created many various & unique
                  projects over the past two years, most of which can be found under the Projects
                  section, and I specialize in web design / NodeJS backend management.
                </p>

                <p>
                  I wasn't born a developer. Growing up, I never really had a vision of becoming a developer.
                  I started with codeacademy courses on Python, JavaScript, and Linux. Eventually, my fellow
                  companion from Middle School, Aidan, showed me the reigns of NodeJS, web technologies, and
                  we developed many applications and projects together for much of the duration of Middle School.
                </p>

                <p>
                  Recently, I've picked up interest in cybersecurity, and have been participating in numerous
                  cybersecurity CTFs; competitions designed to promote and expose people to the fascinating
                  field of Cybersecurity. I believe that our world has a great need for more
                  cyber security awareness, and CTFs a beautiful opportunity to learn about how you can
                  secure your applications, and protect your users.
                </p>
              </div>
            </OnLoadAnime>
          </div>
        </div>
      </div>
    )
  }
}
