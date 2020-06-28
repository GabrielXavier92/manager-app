import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { useHistory } from 'react-router-dom';

import useAuthToken from '../useAuthToken';

interface IUseSignInMutation {
  signIn(email: string, password: string): void;
  mutationResults: any;
}

export const SIGN_IN = gql`
  mutation SignIn($input: LoginUserInput!){
    signIn(input: $input) {
      token
      user {
        id
        accountId
        status
        email
        name
        gender
        roles {
          id
          role
        }
      }
    }
  }
`;

export const useSignInMutation = (): IUseSignInMutation => {
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


export default useSignInMutation;
