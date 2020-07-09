import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types';
import { UseGetProcedure } from './types';
import { GET_PROCEDURE } from './gql';

const useGetProcedure = (): UseGetProcedure => {
  const [query, queryResults] = useLazyQuery<Query>(GET_PROCEDURE);

  const getProcedure = (id: string) => query({
    variables: {
      id,
    },
  });

  return { getProcedure, queryResults };
};

export default useGetProcedure;
