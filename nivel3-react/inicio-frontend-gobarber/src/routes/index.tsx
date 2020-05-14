import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SingIn from '../pages/Signin'
import SingUp from '../pages/Signup'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/cadastro" exact component={SingUp} />
  </Switch>
)

export default Routes
