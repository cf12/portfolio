import React from 'react'

import './index.scss'

import { IoMdMail } from 'react-icons/io'

import HighlightedTitle from '../../../components/HighlightedTitle'

class BodySectionContact extends React.PureComponent {
  render () {
    return (
    <div className='sec-contact flex-ccol'>
      <HighlightedTitle className='sec-contact__title'>
        CONTACT ME
      </HighlightedTitle>

        <div>
          <div className='sec-contact__left flex-center'>
            <div className='sec-contact__left__text'>
              <h2>
                Shoot me an email at <mark>brian@cf12.org</mark>
              </h2>
            </div>
          </div>

          <IoMdMail size='256px' color='white' />
        </div>
      </div>
    )
  }
}

export default BodySectionContact
