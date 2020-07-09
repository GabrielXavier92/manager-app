import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { SpecialtyInput } from '../../types/types';
import { UseUpdateProcedureTable } from './types';
import { GET_PROCEDURE_TABLE, UPDATE_PROCEDURE_TABLE, GET_PROCEDURE_TABLES } from './gql';

const useUpdateProcedureTable = (): UseUpdateProcedureTable => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<SpecialtyInput>(UPDATE_PROCEDURE_TABLE, {
    onCompleted: (data) => {
      if (data) history.push('/specialtyList');
    },
  });


  const updateProcedureTable = (id: string, specialty: SpecialtyInput) => (mutation({
    variables: {
      id,
      input: specialty,
    },
    refetchQueries: [{ query: GET_PROCEDURE_TABLE, variables: { id } }, { query: GET_PROCEDURE_TABLES }],
  }));

  return { updateProcedureTable, mutationResults };
};

export default useUpdateProcedureTable;
