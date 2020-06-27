import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { DoctorInput } from '../../types/types.d';
import { GET_DOCTORS } from '../useGetDoctors';

import history from '../../utils/history';

interface IUseCreateDoctorMutation {
  createDoctor(doctor: DoctorInput): void;
  mutationResults: any;
}

export const CREATE_DOCTOR = gql`
  mutation createDoctor($input: DoctorInput!){
    createDoctor(input: $input) {
      id
      name
      gender
      register
      createdAt
    }
  }
`;

export const useCreateDoctorMutation = (): IUseCreateDoctorMutation => {
  const updateCache = (cache: any, { data }: any) => {
    const getDoctors = cache.readQuery({
      query: GET_DOCTORS,
    });

    cache.writeQuery({
      query: GET_DOCTORS,
      data: { getDoctors: [data.createDoctor, ...getDoctors] },
    });
  };

  const [mutation, mutationResults] = useMutation(CREATE_DOCTOR, {
    onCompleted: (data) => {
      if (data) history.push('/dashboard/doctorlist');
    },
    update: updateCache,
  });


  const createDoctor = (doctor: DoctorInput) => (mutation({
    variables: {
      input: doctor,
    },
  }));

  return { createDoctor, mutationResults };
};


export default useCreateDoctorMutation;
