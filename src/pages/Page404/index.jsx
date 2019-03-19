import React from 'react'

import BackButton from 'components/BackButton'

import './index.scss'

export default class NotFound extends React.Component {

  render () {
    return (
      <div className='not-found__container flex-center flex-col'>
        <BackButton />

        <img
          className='not-found__icon'
          src={require(`assets/images/404.svg`)}
          alt=''
        />

        <h1 className='not-found__title'>NOT FOUND</h1>
        <p className='not-found__message'>
          It’s out there somewhere...
        </p>

        <div className='not-found__bl'>
          Icon made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </div>
    )
  }
}
