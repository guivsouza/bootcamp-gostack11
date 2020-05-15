import React from 'react'
import { Switch } from 'react-router-dom'

import SingIn from '../pages/Signin'
import SingUp from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

import Route from './Route'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/cadastro" exact component={SingUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes
