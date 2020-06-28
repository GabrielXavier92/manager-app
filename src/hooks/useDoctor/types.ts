import { QueryResult, MutationResult } from '@apollo/react-common';

import { DoctorInput, Query } from '../../types/types.d';

export type UseDoctor = {
  useGetDoctor: () => UseGetDoctor;
  useGetDoctors: () => UseGetDoctors;
  useCreateDoctor: () => UseCreateDoctor;
  useUpdateDoctor: () => UseUpdateDoctorMutation;
};

export type UseGetDoctor = {
  getDoctor(id: string): void;
  queryResults: QueryResult<Query>;
};

export type UseGetDoctors = {
  getDoctors(): void;
  queryResults: QueryResult<Query>;
};


export type UseCreateDoctor = {
  createDoctor(doctor: DoctorInput): void;
  mutationResults: MutationResult<DoctorInput>;
};

export type UseUpdateDoctorMutation = {
  updateDoctor(id: string, doctor: DoctorInput): void;
  mutationResults: MutationResult<DoctorInput>;
};
