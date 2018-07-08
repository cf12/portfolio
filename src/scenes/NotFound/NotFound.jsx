import React from 'react'

import ToHomepageButton from 'components/ToHomepageButton/ToHomepageButton.jsx'

import './NotFound.scss'

export default class NotFound extends React.Component {
  getRandomMessage () {
    return messages[Math.floor(Math.random() * messages.length)]
  }

  render () {
    return (
      <div className='not-found__container flex--center flex--column'>
        <ToHomepageButton />

        <p className='not-found__icon'>🤔</p>

        <h1 className='not-found__title'>404 - Page Not Found</h1>
        <p className='not-found__message'>
          {this.getRandomMessage()}
        </p>
      </div>
    )
  }
}

const messages = [
  `Poof! It's gone! (Or it was never here to begin with; probably the latter...)`,
  `Man, I was really hoping for something here!`,
  `RIP`,
  `It's just your imagination...`,
  `well fuck`
]
