import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import useAuthToken from '../useAuthToken';


interface IUseLogoun {
  logout(): void;
}


const useLogout = (): IUseLogoun => {
  const history = useHistory();
  const { removeAuthToken } = useAuthToken();

  const apolloClient = useApolloClient();

  const logout = () => {
    apolloClient.clearStore();
    removeAuthToken();
    history.replace('/signin');
  };

  return { logout };
};

export default useLogout;
