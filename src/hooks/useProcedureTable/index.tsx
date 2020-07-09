import { UseProcedureTable } from './types';

import useCreateProcedureTable from './useCreateProcedureTable';
import useGetProcedureTable from './useGetProcedureTable';
import useGetProcedureTables from './useGetProcedureTables';
import useUpdateProcedureTable from './useUpdateProcedureTable';

const useSpecialty = (): UseProcedureTable => ({
  useCreateProcedureTable,
  useGetProcedureTable,
  useGetProcedureTables,
  useUpdateProcedureTable,
});


export default useSpecialty;
