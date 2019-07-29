import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma/css/bulma.css'
import './index.css'

import Blog from './pages/Blog'
import Post from './pages/Post'

const app = (
  <Router>
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:slug" component={Post} />
    </Switch>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
