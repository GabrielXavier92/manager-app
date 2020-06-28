import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import useAuthToken from '../useAuthToken';

import { UseSignInUser } from './types';
import { SIGN_IN } from './gql';

export const useSignInUser = (): UseSignInUser => {
  const history = useHistory();
  const { setAuthToken } = useAuthToken();

  const [mutation, mutationResults] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      if (data?.signIn?.token) {
        setAuthToken(data.signIn.token);
        history.push('/dashboard');
      }
    },
  });

  const signIn = (email: string, password: string) => (mutation({
    variables: {
      input: { email, password },
    },
  }));

  return { signIn, mutationResults };
};


export default useSignInUser;
