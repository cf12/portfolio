import React from 'react'
import { Link } from 'react-scroll'

import styles from './index.module.scss'

class Button extends React.Component {
  constructor (props) {
    super()

    this.name = props.name
    this.linkTo = props.linkTo
  }

  render () {
    return (
      <Link
        to={this.linkTo}
        smooth
        duration={300}
        className={styles.button + ' flex-center'}>

        <p>{this.name}</p>
      </Link>
    )
  }
}

class NavBar extends React.Component {
  render () {
    return (
      <header className={styles.container + ' flex-row'}>
        <img
          className={styles.icon}
          src={require('assets/images/profile-pic.png')}
          alt='Profile'
        />

        <Button name='ABOUT' linkTo='about' />
        <Button name='PROJECTS' linkTo='projects' />
        <Button name='CONTACT' linkTo='contact' />
      </header>
    )
  }
}

export default NavBar
