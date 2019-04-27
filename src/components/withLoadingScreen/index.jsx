import React from 'react'

import './index.scss'

function withLoadingScreen (Component) {
  return class extends React.Component {
    state = {
      loading: true,
      fading: false
    }

    componentDidMount () {
      document.body.style.overflow = 'hidden'

      setTimeout(() => {
        this.setState({
          fading: true,
        })

        setTimeout(() => {
          this.setState({
            loading: false,
          })

          document.body.style.overflow = 'visible'
        }, 600)
      }, 2000)
    }

    render () {
      return (
        <>
          {
            (this.state.loading) ? (
              <div className={'lds-ripple ' + (this.state.fading ? 'lds-ripple--active' : '')}>
                <div />
              </div>
            ) : null
          }

          <Component {...this.props} />
        </>
      )
    }
  }
}


export default withLoadingScreen