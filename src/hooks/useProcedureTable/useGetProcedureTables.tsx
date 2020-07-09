import { useLazyQuery } from '@apollo/react-hooks';
import { Query } from '../../types/types';
import { UseGetProcedureTables } from './types';
import { GET_PROCEDURE_TABLES } from './gql';


const useGetProcedureTables = (): UseGetProcedureTables => {
  const [query, queryResults] = useLazyQuery<Query>(GET_PROCEDURE_TABLES);

  const getProcedureTables = () => query();

  return { getProcedureTables, queryResults };
};

export default useGetProcedureTables;
