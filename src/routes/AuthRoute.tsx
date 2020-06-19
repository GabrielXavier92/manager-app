import React from 'react';
import { useHistory, Route } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';

interface IGuardeRoute {
  component: any;
  path: string;
  exact: boolean;
}
const AuthRoute: React.FC<IGuardeRoute> = ({ component, path, exact }) => {
  const history = useHistory();
  const { token } = useAuthToken();

  if (!token) {
    history.push('/signin');
    return null;
  }

  return <Route exact={exact} path={path} component={component} />;
};

export default AuthRoute;
