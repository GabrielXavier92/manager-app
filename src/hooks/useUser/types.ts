import { QueryResult, MutationResult } from '@apollo/react-common';
import { LoginUser, Query } from '../../types/types.d';

export type UseUser = {
  useGetUser: () => UseGetUser;
  useSignInUser: () => UseSignInUser;
  useLogoutUser: () => UseLogoutUser;
};

export type UseGetUser = {
  getUser(): void;
  queryResults: QueryResult<Query>;
};


export type UseSignInUser = {
  signIn(email: string, password: string): void;
  mutationResults: MutationResult<LoginUser>;
};


export type UseLogoutUser = {
  logout(): void;
};
