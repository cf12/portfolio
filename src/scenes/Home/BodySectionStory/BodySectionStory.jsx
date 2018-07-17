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
          <div className='body__avatar flex--center'>
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
                  Hello! My name is Brian Xiang. I'm an amateur web developer, hobbyist graphic designer and
                  video producer. I've created many various, unique projects over the past two years,
                  many of which can be found in the Projects section, and I'm aiming towards a career
                  in professional Web Development and Computer Science.
                </p>

                <p>
                  I've come a long way since my first "Hello World" application. Over these past few years,
                  I've been learning and traversing the depths of Computer Science. It's amazing to me how
                  there's a field for everything in Computer Science; Cybersecurity, Game Development,
                  Networking, AI, Machine Learning, Digital Design, and Engineering are just a few.
                  Over the tiemspan of my career, I hope to create something in every single one of these
                  fields. It's amazing how huge the field of Computer Science has become.
                </p>

                <p>
                  Recently, I've picked up interest in cybersecurity, and have been participating in numerous
                  cybersecurity CTFs; competitions designed to promote and expose people to the importance
                  of Cybersecurity. I believe that our world has a great need for more
                  cyber security awareness, and CTFs a wonderful opportunity to learn about how you can
                  secure your applications, and protect your users. Whenever I'm creating applications nowadays,
                  I tend to focus a lot more on the security impacts thanks to these CTFs.
                </p>
              </div>
            </OnLoadAnime>
          </div>
        </div>
      </div>
    )
  }
}
