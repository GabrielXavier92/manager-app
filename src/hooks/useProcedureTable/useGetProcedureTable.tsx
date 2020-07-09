import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types';
import { UseGetProcedureTable } from './types';
import { GET_PROCEDURE_TABLE } from './gql';

const useGetProcedureTable = (): UseGetProcedureTable => {
  const [query, queryResults] = useLazyQuery<Query>(GET_PROCEDURE_TABLE);

  const getProcedureTable = (id: string) => query({
    variables: {
      id,
    },
  });

  return { getProcedureTable, queryResults };
};

export default useGetProcedureTable;
