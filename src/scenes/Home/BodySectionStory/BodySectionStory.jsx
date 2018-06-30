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

              <p className='body__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent fermentum, lacus vitae porttitor accumsan, lacus
                arcu egestas mi, id molestie sem lacus ac purus. Fusce dictum
                nisi at mauris vestibulum, in placerat lacus ornare. Fusce
                turpis risus, laoreet sit amet nibh vitae, cursus imperdiet
                erat. Quisque consequat felis non arcu ultricies commodo.
                Donec ullamcorper est nisl, eu tincidunt metus mattis quis.
                Curabitur auctor semper urna quis pharetra. Nulla hendrerit
                maximus lacus id mollis. Vivamus eget nisi eu lectus tempus
                mollis. Phasellus sem ex, cursus quis massa id, pulvinar
                convallis sem. Aliquam sodales ligula vitae interdum varius.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. In fringilla, nunc at maximus accumsan,
                orci nisi condimentum velit, volutpat finibus velit urna viverra
                lorem. Sed imperdiet ornare tellus, sed consequat nisi ultrices a.
              </p>
            </OnLoadAnime>
          </div>
        </div>
      </div>
    )
  }
}
