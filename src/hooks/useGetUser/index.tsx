import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';


interface IUseGetUser {
  getUser(): void;
  queryResults: any;
}

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
  const [query, queryResults] = useLazyQuery(GET_USER);

  const getUser = () => (query());

  return { getUser, queryResults };
};


export default useGetUser;
