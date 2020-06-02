import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DashBoard from '../components/Dashboard';
import SignInForm from '../components/SignInForm';

export const AppRoutes = () => (
  <Switch>
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/signin" component={SignInForm} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default AppRoutes;
