import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types.d';
import { UseGetDoctor } from './types';
import { GET_DOCTOR } from './gql';

const useGetDoctor = (): UseGetDoctor => {
  const [query, queryResults] = useLazyQuery<Query>(GET_DOCTOR);

  const getDoctor = (id: string) => query({
    variables: {
      id,
    },
  });

  return { getDoctor, queryResults };
};

export default useGetDoctor;
