import { QueryResult, MutationResult } from '@apollo/react-common';

import { ProcedureInput, Query } from '../../types/types.d';

export type UseProcedure = {
  useGetProcedure: () => UseGetProcedure;
  useGetProcedures: () => UseGetProcedures;
  useCreateProcedure: () => UseCreateProcedure;
  useUpdateProcedure: () => UseUpdateProcedure;
};

export type UseGetProcedure = {
  getProcedure(id: string): void;
  queryResults: QueryResult<Query>;
};

export type UseGetProcedures = {
  getProcedures(procedureTableId: string, take: number, cursor?: string, filter?: string): void;
  queryResults: QueryResult<Query>;
};


export type UseCreateProcedure = {
  createProcedure(procedure: ProcedureInput): void;
  mutationResults: MutationResult<ProcedureInput>;
};

export type UseUpdateProcedure = {
  updateProcedure(id: string, procedure: ProcedureInput): void;
  mutationResults: MutationResult<ProcedureInput>;
};
