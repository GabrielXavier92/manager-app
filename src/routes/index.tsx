import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';

// eslint-disable-next-line import/no-cycle
import DashBoard from '../pages/Dashboard';
import Signin from '../pages/Signin';

import { DoctorList } from '../components/DoctorList';

export const AppRoutes = () => (
  <Switch>
    <Route path="/signin" component={Signin} />
    <AuthRoute exact={false} path="/dashboard" component={DashBoard} />
    <Redirect to="/dashboard" />
  </Switch>
);

export const AuthRoutes = () => (
  <>
    <AuthRoute path="/dashboard" component={DoctorList} exact />
    <Redirect to="/dashboard" />
  </>
);
