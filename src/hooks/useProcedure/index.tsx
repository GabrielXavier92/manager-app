import { UseProcedureTable } from './types';

import useCreateProcedureTable from './useCreateProcedureTable';

const useSpecialty = (): UseProcedureTable => ({
  useCreateProcedureTable,
});


export default useSpecialty;
