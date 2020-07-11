import { MutationResult } from '@apollo/react-common';
import { LoginUser } from '../../generated/graphql';

export type UseUser = {
  useSignInUser: () => UseSignInUser;
  useLogoutUser: () => UseLogoutUser;
};

export type UseSignInUser = {
  signIn(email: string, password: string): void;
  mutationResults: MutationResult<LoginUser>;
};


export type UseLogoutUser = {
  logout(): void;
};
