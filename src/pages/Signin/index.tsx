import React, { useEffect } from 'react';
import { Card, Page } from '@shopify/polaris';

import { useAuth } from '../../hooks';

import SignInForm from '../../components/SignInForm';

const Signin: React.FC = () => {
  const { logout } = useAuth().useLogoutUser();

  const handleLogout = () => {
    logout();
  };

  useEffect(handleLogout, []);

  return (
    <Page singleColumn title="Entrar">
      <Card sectioned>
        <SignInForm />
      </Card>
    </Page>
  );
};

export default Signin;
