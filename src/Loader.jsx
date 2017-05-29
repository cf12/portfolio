import React, { Component } from 'react'
import './Loader.css'

class Loader extends Component {
  render () {
    return (
      <div className='wrapper-loader'>
        <div className='loader'>
          <div className='ball-1' />
          <div className='ball-2' />
          <div className='ball-3' />
        </div>
      </div>
    )
  }
}

export default Loader
