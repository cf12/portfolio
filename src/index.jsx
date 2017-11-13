import React from 'react'
import { render } from 'react-dom'
import './index.html'

import './styles/reset.scss'
import './styles/fonts.scss'
import Home from './scenes/Home/index.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
