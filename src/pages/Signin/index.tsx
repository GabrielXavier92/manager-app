import React, { useEffect } from 'react';
import { Card, Page } from '@shopify/polaris';

import { useUser } from '../../hooks';

import SignInForm from '../../components/SignInForm';

const Signin: React.FC = () => {
  const { logout } = useUser().useLogoutUser();

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
