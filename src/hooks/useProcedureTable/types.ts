import { QueryResult, MutationResult } from '@apollo/react-common';

import { ProcedureTableInput, Query } from '../../types/types.d';

export type UseProcedureTable = {
  useGetProcedureTable: () => UseGetProcedureTable;
  useGetProcedureTables: () => UseGetProcedureTables;
  useCreateProcedureTable: () => UseCreteProcedureTable;
  useUpdateProcedureTable: () => UseUpdateProcedureTable;
};

export type UseGetProcedureTable = {
  getProcedureTable(id: string): void;
  queryResults: QueryResult<Query>;
};

export type UseGetProcedureTables = {
  getProcedureTables(): void;
  queryResults: QueryResult<Query>;
};


export type UseCreteProcedureTable = {
  createProcedureTable(procedureTable: ProcedureTableInput): void;
  mutationResults: MutationResult<ProcedureTableInput>;
};

export type UseUpdateProcedureTable = {
  updateProcedureTable(id: string, procedureTable: ProcedureTableInput): void;
  mutationResults: MutationResult<ProcedureTableInput>;
};
