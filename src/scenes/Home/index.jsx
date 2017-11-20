import React from 'react'

import './index.scss'
import NavBar from '../components/NavBar/NavBar.jsx'

export default class Home extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <NavBar />

        <div className='showcase'>
          <img className='showcase__pic' src={require('../../assets/images/profile-pic.png')} />
          <p className='showcase__subtitle'>Just another average keyboard smasher on the internet</p>
        </div>

        <div className='body'>
          <div className='body__paragraph body__paragraph--story'>

          </div>

          <div className='body__paragraph body__paragraph--skills'>

          </div>
        </div>
      </div>
    )
  }
}
