import React from 'react'

import './index.scss'

function withLoadingScreen (Component) {
  return class extends React.Component {
    state = {
      loading: true,
      fading: false
    }

    componentDidMount () {
      setTimeout(() => {
        this.setState({
          fading: true,
        })

        setTimeout(() => {
          this.setState({
            loading: false,
          })
        }, 600)
      }, 1500)
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