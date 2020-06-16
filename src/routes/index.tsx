import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DashBoard from '../components/Dashboard';
import Signin from '../pages/Signin';

export const AppRoutes = () => (
  <Switch>
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/signin" component={Signin} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default AppRoutes;
