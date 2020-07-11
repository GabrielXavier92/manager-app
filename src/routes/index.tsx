import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';

// eslint-disable-next-line import/no-cycle
import DashBoard from '../pages/Dashboard';
import Signin from '../pages/Signin';

import { DoctorForm, DoctorList } from '../components/Doctor';
import { SpecialtyList, SpecialtyForm } from '../components/Specialty';
import { ProcedureTableList, ProcedureTableForm } from '../components/ProcedureTable';
import { ProcedureForm } from '../components/Procedure';
import { PatientList, PatientForm } from '../components/Patient';

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
    <AuthRoute path="/doctorList" component={DoctorList} exact />
    <AuthRoute path="/doctor" component={DoctorForm} exact />
    <AuthRoute path="/doctor/:id" component={DoctorForm} exact />

    <AuthRoute path="/patientList" component={PatientList} exact />
    <AuthRoute path="/patient" component={PatientForm} exact />
    <AuthRoute path="/patient/:id" component={PatientForm} exact />

    <AuthRoute path="/specialtyList" component={SpecialtyList} exact />
    <AuthRoute path="/specialty" component={SpecialtyForm} exact />
    <AuthRoute path="/specialty/:id" component={SpecialtyForm} exact />

    <AuthRoute path="/procedureTableList" component={ProcedureTableList} exact />
    <AuthRoute path="/procedureTable" component={ProcedureTableForm} exact />
    <AuthRoute path="/procedureTable/:id" component={ProcedureTableForm} exact />

    <AuthRoute path="/procedureTable/:procedureTableId/procedure" component={ProcedureForm} exact />
    <AuthRoute path="/procedureTable/:procedureTableId/procedure/:id" component={ProcedureForm} exact />

    <AuthRoute path="/" component={Home} exact />

    <Redirect to="/patientList" />
  </>
);
