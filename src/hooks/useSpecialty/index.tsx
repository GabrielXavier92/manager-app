import { UseSpecialty } from './types';

import useGetSpecialty from './useGetSpecialty';
import useGetSpecialties from './useGetSpecialties';
import useCreateSpecialty from './useCreateSpecialty';
import useUpdateSpecialty from './useUpdateSpecialty';

const useSpecialty = (): UseSpecialty => ({
  useGetSpecialty,
  useGetSpecialties,
  useCreateSpecialty,
  useUpdateSpecialty,
});


export default useSpecialty;
