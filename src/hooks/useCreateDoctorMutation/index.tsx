import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { DoctorInput } from '../../types/types.d';
import { GET_DOCTORS, GET_DOCTORS_FRAGMENT } from '../useGetDoctors';

import history from '../../utils/history';

interface IUseCreateDoctorMutation {
  createDoctor(doctor: DoctorInput): void;
  mutationResults: any;
}

export const CREATE_DOCTOR = gql`
  mutation createDoctor($input: DoctorInput!){
    createDoctor(input: $input) {
      ...GetDoctorsFragment
    }
  }
  ${GET_DOCTORS_FRAGMENT}
`;

export const useCreateDoctorMutation = (): IUseCreateDoctorMutation => {
  const [mutation, mutationResults] = useMutation(CREATE_DOCTOR, {
    onCompleted: (data) => {
      if (data) history.push('/dashboard/doctorlist');
    },
    refetchQueries: [{ query: GET_DOCTORS }],
  });


  const createDoctor = (doctor: DoctorInput) => (mutation({
    variables: {
      input: doctor,
    },
  }));

  return { createDoctor, mutationResults };
};


export default useCreateDoctorMutation;
