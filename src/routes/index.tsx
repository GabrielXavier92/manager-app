import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';

import DashBoard from '../pages/Dashboard';
import Signin from '../pages/Signin';

export const AppRoutes = () => (
  <Switch>
    <Route path="/signin" component={Signin} />
    <AuthRoute path="/dashboard" component={DashBoard} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default AppRoutes;
