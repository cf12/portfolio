import React from 'react'

import './Showcase.scss'

export default class Showcase extends React.Component {
  render () {
    return (
      <div className='showcase'>
        <img className='showcase__pic' src={require('../../../assets/images/profile-pic.png')} />
        <p className='showcase__subtitle'>Just another average keyboard smasher on the internet</p>
      </div>
    )
  }
}
