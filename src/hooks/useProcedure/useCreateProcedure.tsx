import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { ProcedureInput } from '../../types/types';
import { UseCreateProcedure } from './types';
import { GET_PROCEDURES, CREATE_PROCEDURE } from './gql';

const useCreateProcedure = (): UseCreateProcedure => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<ProcedureInput>(CREATE_PROCEDURE, {
    onCompleted: (data) => {
      if (data) history.push('/specialtyList');
    },
    refetchQueries: [{ query: GET_PROCEDURES }],
  });


  const createProcedure = (procedure: ProcedureInput) => (mutation({
    variables: {
      input: procedure,
    },
  }));

  return { createProcedure, mutationResults };
};

export default useCreateProcedure;
