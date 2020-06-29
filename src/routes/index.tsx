import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';

// eslint-disable-next-line import/no-cycle
import DashBoard from '../pages/Dashboard';
import Signin from '../pages/Signin';

import { DoctorForm, DoctorList } from '../components/Doctor';
import { SpecialtyList, SpecialtyForm } from '../components/Specialty';

import Home from '../components/Home';

export const AppRoutes = () => (
  <Switch>
    <Route path="/signin" component={Signin} />
    <Route path="/signin" component={Signin} />
    <AuthRoute exact={false} path="/" component={DashBoard} />
  </Switch>
);

export const AuthRoutes = () => (
  <>
    <AuthRoute path="/doctorlist" component={DoctorList} exact />
    <AuthRoute path="/doctor" component={DoctorForm} exact />
    <AuthRoute path="/doctor/:id" component={DoctorForm} exact />

    <AuthRoute path="/specialtylist" component={SpecialtyList} exact />
    <AuthRoute path="/specialty" component={SpecialtyForm} exact />
    <AuthRoute path="/specialty/:id" component={SpecialtyForm} exact />

    <AuthRoute path="/" component={Home} exact />

    <Redirect to="/" />
  </>
);
