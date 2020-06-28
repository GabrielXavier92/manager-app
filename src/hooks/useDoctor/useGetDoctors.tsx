import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types.d';
import { UseGetDoctors } from './types';
import { GET_DOCTORS } from './gql';


const useGetDoctors = (): UseGetDoctors => {
  const [query, queryResults] = useLazyQuery<Query>(GET_DOCTORS);

  const getDoctors = () => query();

  return { getDoctors, queryResults };
};

export default useGetDoctors;
