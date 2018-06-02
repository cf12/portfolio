import React from 'react'

import './BodySectionStory.scss'

export default class BodySectionStory extends React.Component {
  render () {
    return (
      <div className='body__section body__section--story flex--center'>

        <p className='body__title'>MY STORY</p>
        <div className='body__separator--big' />

        <div className='flex--row'>
          <div className='body__avatar'>
            <img src={require('../../../assets/images/lmao.png')} />
          </div>

          <div className='flex--center flex--column'>
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
          </div>
        </div>
      </div>
    )
  }
}
