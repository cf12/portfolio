import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'

import './index.css'
import PageMain from './PageMain'

ReactDOM.render((
  <HashRouter>
    <Route path="/" component={PageMain} />
  </HashRouter>
), document.getElementById('root'))
