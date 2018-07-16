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

              <img src={require('assets/images/avatar.png')} alt='Avatar' />
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
                  Hello! My name is Brian Xiang. I'm an amateur web developer, and a hobbyist graphic designer /
                  video producer. I've designed many various & unique projects over the past two years,
                  many of which can be found under the Projects section, and I'm aiming towards a career
                  in professional Web Development and Computer Science.
                </p>

                <p>
                  I've come a long way since when I created my first "Hello World". Over the years,
                  I've enjoyed learning about the depths of Computer Science. It's amazing how
                  there's a field for everything in Computer Science: Cybersecurity, Game Development,
                  and Engineering are just a few examples. Over the course of my life, I yearn to
                  touch on every single one of these fields. It's fascinating how broadly the
                  Computer Science field spreads to everything.
                </p>

                <p>
                  Recently, I've picked up interest in cybersecurity, and have been participating in numerous
                  cybersecurity CTFs; competitions designed to promote and expose people to the fascinating
                  field of Cybersecurity. I believe that our world has a great need for more
                  cyber security awareness, and CTFs a beautiful opportunity to learn about how you can
                  secure your applications, and protect your users. When I'm creating applications on the web,
                  I put a lot of effort into securing my applications.
                </p>
              </div>
            </OnLoadAnime>
          </div>
        </div>
      </div>
    )
  }
}
