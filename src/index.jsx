import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import './fonts/Muli/Muli-Regular.ttf'
import './fonts/Agent/Agent300.ttf'

import './normalize.css'
import './index.css'
import PageMain from './PageMain.jsx'

ReactDOM.render((
  <HashRouter>
    <Route path="/" component={PageMain} />
  </HashRouter>
), document.getElementById('root'))
