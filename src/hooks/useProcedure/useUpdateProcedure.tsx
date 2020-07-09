import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { ProcedureInput } from '../../types/types';
import { UseUpdateProcedure } from './types';
import { GET_PROCEDURE, UPDATE_PROCEDURE, GET_PROCEDURES } from './gql';

const useUpdateProcedure = (): UseUpdateProcedure => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<ProcedureInput>(UPDATE_PROCEDURE, {
    onCompleted: (data) => {
      if (data) history.push('/specialtyList');
    },
  });


  const updateProcedure = (id: string, procedure: ProcedureInput) => (mutation({
    variables: {
      id,
      input: procedure,
    },
    refetchQueries: [{ query: GET_PROCEDURE, variables: { id } }, { query: GET_PROCEDURES }],
  }));

  return { updateProcedure, mutationResults };
};

export default useUpdateProcedure;
