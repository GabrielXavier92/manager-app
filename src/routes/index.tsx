import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DashBoard from '../components/Dashboard';

export const AppRoutes = () => (
  <Switch>
    <Route path="/dashboard" component={DashBoard} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default AppRoutes;
