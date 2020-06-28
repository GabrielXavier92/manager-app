import { UseDoctor } from './types';

import useGetDoctor from './useGetDoctor';
import useGetDoctors from './useGetDoctors';
import useCreateDoctor from './useCreateDoctor';
import useUpdateDoctor from './useUpdateDoctor';

const useDoctor = (): UseDoctor => ({
  useGetDoctor, useGetDoctors, useCreateDoctor, useUpdateDoctor,
});


export default useDoctor;
