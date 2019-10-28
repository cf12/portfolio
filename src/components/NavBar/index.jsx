import React from 'react'
import { Link } from 'react-scroll'

import {
  FaBars,
} from 'react-icons/fa'

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
  constructor (props) {
    super(props)

    this.sidebar = React.createRef()
  }

  state = {
    sidebar: false
  }

  toggleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render () {
    return (
      <>
        <div
          className={styles.sidebar}
          ref={this.sidebar}
          style={{
            height: this.state.sidebar ? '100%' : '0%',
            opacity: this.state.sidebar ? 1 : 0
          }}
        >
          <FaBars
            className={styles.sidebarButton}
            onClick={this.toggleSidebar}
          />
        </div>

        <header className={styles.container + ' flex-row'}>
          <img
            className={styles.icon}
            src={require('assets/images/profile-pic.png')}
            alt='Profile'
          />

          <FaBars
            className={styles.navbarButton}
            onClick={this.toggleSidebar}
          />

          <span className={styles.buttons + ' flex-row'}>
            <Button name='ABOUT' linkTo='about' />
            <Button name='PROJECTS' linkTo='projects' />
            <Button name='CONTACT' linkTo='contact' />
          </span>
        </header>
      </>
    )
  }
}

export default NavBar
