import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'

import './index.css'
import Header from './Header'

const AppMain = () => {
  return (
    <Header />
  )
}

ReactDOM.render((
  <HashRouter>
    <Route path="/" component={AppMain} />
  </HashRouter>
), document.getElementById('root'))
