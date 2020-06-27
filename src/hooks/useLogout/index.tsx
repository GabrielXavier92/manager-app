import { useApolloClient } from '@apollo/react-hooks';
import useAuthToken from '../useAuthToken';
import history from '../../utils/history';

interface IUseLogoun {
  logout(): void;
}


const useLogout = (): IUseLogoun => {
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
