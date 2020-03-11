import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { WebSite } from './layouts/WebSite'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Opinions } from './pages/Opinions'
import { Experiences } from './pages/Experiences'

/**
 * Instance of application
 * @author byron7cueva
 */
export const App = () => (
  <BrowserRouter>
    <WebSite>
      <Switch>
        <Route path='/' exact component={Experiences} />
        <Route path='/about' exact component={About} />
        <Route path='/opinions' exact component={Opinions} />
        <Route path='/experience' exact component={Home} />
      </Switch>
    </WebSite>
  </BrowserRouter>
)
