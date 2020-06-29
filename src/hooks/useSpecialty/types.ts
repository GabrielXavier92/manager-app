import { QueryResult, MutationResult } from '@apollo/react-common';

import { SpecialtyInput, Query } from '../../types/types.d';

export type UseSpecialty = {
  useGetSpecialty: () => UseGetSpecialty;
  useGetSpecialties: () => UseGetSpecialties;
  useCreateSpecialty: () => UseCreateSpecialty;
  useUpdateSpecialty: () => UseUpdateSpecialty;
};

export type UseGetSpecialty = {
  getSpecialty(id: string): void;
  queryResults: QueryResult<Query>;
};

export type UseGetSpecialties = {
  getSpecialties(): void;
  queryResults: QueryResult<Query>;
};


export type UseCreateSpecialty = {
  createSpecialty(specialty: SpecialtyInput): void;
  mutationResults: MutationResult<SpecialtyInput>;
};

export type UseUpdateSpecialty = {
  updateSpecialty(id: string, specialty: SpecialtyInput): void;
  mutationResults: MutationResult<SpecialtyInput>;
};
