import React from 'react'

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar__button navbar__button--projects' />
        <div className='navbar__button navbar__button--contact' />
      </div>
    )
  }
}