import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types.d';

import { UseGetUser } from './types';
import { GET_USER } from './gql';

const useGetUser = (): UseGetUser => {
  const [query, queryResults] = useLazyQuery<Query>(GET_USER);

  const getUser = () => (query());

  return { getUser, queryResults };
};

export default useGetUser;
