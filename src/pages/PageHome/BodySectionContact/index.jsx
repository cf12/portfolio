import React from 'react'

import './index.scss'
import { secondary } from '../../../styles/colors.scss'

import HighlightedText from '../../../components/HighlightedText'

import { IoMdMail } from 'react-icons/io'

class BodySectionContact extends React.PureComponent {
  render () {
    return (
    <div className='sec-contact flex-ccol'>
      <HighlightedText className='sec-contact__title'>
        CONTACT ME
      </HighlightedText>

        <div>
          <div className='sec-contact__left flex-center'>
            <div className='sec-contact__left__text'>
              <h2>
                Got any questions or business inquiries?
                Wanna chat about life?
                Shoot me an email at
              </h2>
              <HighlightedText
                bgColor={secondary}
                textColor='white'
                textSize='42px'
                textWeight='500'
              >
                brian@cf12.org
              </HighlightedText>
            </div>
          </div>

          <IoMdMail size='256px' color='white' />
        </div>
      </div>
    )
  }
}

export default BodySectionContact
