import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types.d';
import { UseGetSpecialty } from './types';
import { GET_SPECIALTY } from './gql';

const useGetSpecialty = (): UseGetSpecialty => {
  const [query, queryResults] = useLazyQuery<Query>(GET_SPECIALTY);

  const getSpecialty = (id: string) => query({
    variables: {
      id,
    },
  });

  return { getSpecialty, queryResults };
};

export default useGetSpecialty;
