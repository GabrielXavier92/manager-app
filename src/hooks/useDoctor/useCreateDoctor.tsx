import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { DoctorInput } from '../../types/types.d';
import { UseCreateDoctor } from './types';
import { GET_DOCTORS, CREATE_DOCTOR } from './gql';
import { transformStringDayInTimestamp } from '../../utils/formatDate';

const useCreateDoctor = (): UseCreateDoctor => {
  const history = useHistory();

  const [mutation, mutationResults] = useMutation<DoctorInput>(CREATE_DOCTOR, {
    onCompleted: (data) => {
      if (data) history.push('/doctorList');
    },
    refetchQueries: [{ query: GET_DOCTORS }],
  });


  const createDoctor = (doctor: DoctorInput) => (mutation({
    variables: {
      input: {
        ...doctor,
        birth: doctor.birth ? transformStringDayInTimestamp(doctor.birth!) : doctor.birth,
      },
    },
  }));

  return { createDoctor, mutationResults };
};

export default useCreateDoctor;
