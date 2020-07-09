import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types';
import { UseGetProcedures } from './types';
import { GET_PROCEDURES } from './gql';


const useGetProcedures = (): UseGetProcedures => {
  const [query, queryResults] = useLazyQuery<Query>(GET_PROCEDURES);

  const getProcedures = (procedureTableId: string, take: number, cursor?: string, filter?: string) => query({
    variables: {
      procedureTableId,
      take,
      cursor,
      filter,
    },
  });

  return { getProcedures, queryResults };
};

export default useGetProcedures;
