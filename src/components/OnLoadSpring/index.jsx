import React from 'react'
import { Spring } from 'react-spring/renderprops'

class OnLoadSpring extends React.Component {
  ref = React.createRef()
  state = {
    animate: false
  }

  componentDidMount () {
    const listener = (e) => {
      const rect = this.ref.current.getBoundingClientRect()

      if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.setState({ animate: true })
        console.log('yeetus')
        window.removeEventListener('scroll', listener, true)
        window.removeEventListener('load', listener, true)
      }
    }

    window.addEventListener('scroll', listener, true)
    window.addEventListener('load', listener, true)
  }

  render () {
    console.log(this.state)

    if (this.state.animate) return (
      <Spring {...this.props}>
        { props =>
          React.cloneElement(this.props.children, { style: props })
        }
      </Spring>
    )

    return (
      <div ref={this.ref} />
    )
  }
}

export default OnLoadSpring
