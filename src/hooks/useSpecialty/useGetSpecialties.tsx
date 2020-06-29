import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types.d';
import { UseGetSpecialties } from './types';
import { GET_SPECIALTIES } from './gql';


const useGetSpecialties = (): UseGetSpecialties => {
  const [query, queryResults] = useLazyQuery<Query>(GET_SPECIALTIES);

  const getSpecialties = () => query();

  return { getSpecialties, queryResults };
};

export default useGetSpecialties;
