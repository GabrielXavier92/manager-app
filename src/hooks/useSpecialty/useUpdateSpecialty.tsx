import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { SpecialtyInput } from '../../types/types';
import { UseUpdateSpecialty } from './types';
import { GET_SPECIALTY, UPDATE_SPECIALTY, GET_SPECIALTIES } from './gql';

const useUpdateSpecialty = (): UseUpdateSpecialty => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<SpecialtyInput>(UPDATE_SPECIALTY, {
    onCompleted: (data) => {
      if (data) history.push('/specialtyList');
    },
  });


  const updateSpecialty = (id: string, specialty: SpecialtyInput) => (mutation({
    variables: {
      id,
      input: specialty,
    },
    refetchQueries: [{ query: GET_SPECIALTY, variables: { id } }, { query: GET_SPECIALTIES }],
  }));

  return { updateSpecialty, mutationResults };
};

export default useUpdateSpecialty;
