import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { ProcedureTableInput } from '../../types/types';
import { UseCreteProcedureTable } from './types';
import { GET_PROCEDURE_TABLES, CREATE_PROCEDURE_TABLE } from './gql';

const useCreteProcedureTable = (): UseCreteProcedureTable => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<ProcedureTableInput>(CREATE_PROCEDURE_TABLE, {
    onCompleted: (data) => {
      if (data) history.push('/specialtyList');
    },
    refetchQueries: [{ query: GET_PROCEDURE_TABLES }],
  });


  const createProcedureTable = (procedureTable: ProcedureTableInput) => (mutation({
    variables: {
      input: procedureTable,
    },
  }));

  return { createProcedureTable, mutationResults };
};

export default useCreteProcedureTable;
