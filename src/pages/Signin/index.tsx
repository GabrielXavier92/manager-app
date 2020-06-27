import React, { useEffect } from 'react';
import { Card, Page } from '@shopify/polaris';

import { useLogout } from '../../hooks';

import SignInForm from '../../components/SignInForm';

const Signin: React.FC = () => {
  const { logout } = useLogout();

  useEffect(() => logout(), []);

  return (
    <Page singleColumn title="Entrar">
      <Card sectioned>
        <SignInForm />
      </Card>
    </Page>
  );
};

export default Signin;
