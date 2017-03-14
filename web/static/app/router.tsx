import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from './views/main/main'

export default
  <Router>
    <Route path="/" component={Main} />
  </Router>