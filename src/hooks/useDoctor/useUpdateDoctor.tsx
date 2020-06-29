import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { DoctorInput } from '../../types/types.d';
import { UseUpdateDoctor } from './types';
import { UPDATE_DOCTOR, GET_DOCTOR } from './gql';
import { transformStringDayInTimestamp } from '../../utils/formatDate';

const useUpdateDoctor = (): UseUpdateDoctor => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<DoctorInput>(UPDATE_DOCTOR, {
    onCompleted: (data) => {
      if (data) history.push('/dashboard/doctorlist');
    },
  });

  const updateDoctor = (id: string, doctor: DoctorInput) => (mutation({
    variables: {
      id,
      input: {
        ...doctor,
        birth: transformStringDayInTimestamp(doctor.birth!),
      },
    },
    refetchQueries: [{ query: GET_DOCTOR, variables: { id } }],
  }));

  return { updateDoctor, mutationResults };
};

export default useUpdateDoctor;
