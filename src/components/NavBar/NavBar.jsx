import React from 'react'

import './NavBar.scss'

import Button from './Button/Button.jsx'

export default class NavBar extends React.Component {
  constructor () {
    super()

    this.innerHeight = window.innerHeight
    this.state = { active: false }
  }

  handleScroll (e) {
    if (e.pageY > window.innerHeight) this.setState({ active: true })
    else this.setState({ active: false })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  render () {
    return (
      <div
        key='wrapper'
        className={'navbar flex--center flex--row ' + (this.state.active ? 'navbar--active-bg' : '')} >
        <Button name='Story' linkTo='story' />
        <Button name='Skills' linkTo='skills' />
        <Button name='Projects' linkTo='projects' />
        <Button name='Contact' linkTo='contact' />
      </div>
    )
  }
}
