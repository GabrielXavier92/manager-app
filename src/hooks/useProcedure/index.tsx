import { UseProcedure } from './types';

import useCreateProcedure from './useCreateProcedure';
import useGetProcedure from './useGetProcedure';
import useGetProcedures from './useGetProcedures';
import useUpdateProcedure from './useUpdateProcedure';

const useSpecialty = (): UseProcedure => ({
  useGetProcedure,
  useGetProcedures,
  useCreateProcedure,
  useUpdateProcedure,
});


export default useSpecialty;
