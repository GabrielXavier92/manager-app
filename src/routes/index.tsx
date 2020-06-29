import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';

// eslint-disable-next-line import/no-cycle
import DashBoard from '../pages/Dashboard';
import Signin from '../pages/Signin';

import { DoctorForm, DoctorList } from '../components/Doctor';
import { SpecialtyList } from '../components/Specialty';

import Home from '../components/Home';

export const AppRoutes = () => (
  <Switch>
    <Route path="/signin" component={Signin} />
    <AuthRoute exact={false} path="/dashboard" component={DashBoard} />
    <Redirect to="/dashboard" />
  </Switch>
);

export const AuthRoutes = () => (
  <>
    <AuthRoute path="/dashboard/doctorlist" component={DoctorList} exact />
    <AuthRoute path="/dashboard/doctor" component={DoctorForm} exact />
    <AuthRoute path="/dashboard/doctor/:id" component={DoctorForm} exact />
    <AuthRoute path="/dashboard/specialtylist" component={SpecialtyList} exact />
    <AuthRoute path="/dashboard" component={Home} exact />
    <Redirect to="/dashboard/specialtylist" />
  </>
);
