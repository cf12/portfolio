import React from 'react'

import './NavBar.scss'

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar__button navbar__button--projects'>
          <p>Projects</p>
        </div>

        <div className='navbar__button navbar__button--blank1'>
          <p>Blank</p>
        </div>

        <div className='navbar__button navbar__button--blank2'>
          <p>Blank</p>
        </div>

        <div className='navbar__button navbar__button--contact'>
          <p>Contact</p>
        </div>

      </div>
    )
  }
}
