import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { SpecialtyInput } from '../../types/types.d';
import { UseCreateSpecialty } from './types';
import { GET_SPECIALTIES, CREATE_SPECIALTY } from './gql';

const useCreateSpecialty = (): UseCreateSpecialty => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<SpecialtyInput>(CREATE_SPECIALTY, {
    onCompleted: (data) => {
      if (data) history.push('/specialtyList');
    },
    refetchQueries: [{ query: GET_SPECIALTIES }],
  });


  const createSpecialty = (specialty: SpecialtyInput) => (mutation({
    variables: {
      input: specialty,
    },
  }));

  return { createSpecialty, mutationResults };
};

export default useCreateSpecialty;
