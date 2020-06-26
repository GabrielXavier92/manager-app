import gql from 'graphql-tag';
import { QueryResult } from '@apollo/react-common';
import { useLazyQuery } from '@apollo/react-hooks';

import { User } from '../../types/types.d';

interface IUseGetUser {
  getUser(): void;
  queryResults?: QueryResult<getUser, Record<string, any>>;
}

type getUser = {
  getUser: User,
};

export const GET_USER = gql`
  query GetUser{
    getUser {
      id
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
`;

export const useGetUser = (): IUseGetUser => {
  const [query, queryResults] = useLazyQuery<getUser>(GET_USER);

  const getUser = () => (query());

  return { getUser, queryResults };
};


export default useGetUser;
