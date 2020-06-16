import React from 'react';
import { Card, Page } from '@shopify/polaris';

import SignInForm from '../../components/SignInForm';

const Signin: React.FC = () => (
  <Page singleColumn title="Entrar">
    <Card sectioned>
      <SignInForm />
    </Card>
  </Page>
);

export default Signin;
