import React from 'react'

import './index.scss'

import HighlightedText from '../../../components/HighlightedText'
import { secondary } from '../../../styles/colors.scss'

class BodySectionContact extends React.PureComponent {
  render () {
    return (
      <div className='sec-contact flex-ccol'>
        <h1 className='sec-contact__title'>CONTACT ME</h1>

        <div className='sec-contact__text'>
          <h2>
            Got any questions or business inquiries?
            Wanna chat about life?
            Shoot me an email at
          </h2>
          <HighlightedText
            bgColor={secondary}
            textColor='white'
            textWeight='500'
          >
            brian@cf12.org
          </HighlightedText>
        </div>
      </div>
    )
  }
}

export default BodySectionContact
