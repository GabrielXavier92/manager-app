import useGetUser from './useGetUser';
import useSignInUser from './useSignInUser';
import useLogoutUser from './useLogoutUser';
import { UseUser } from './types';

const useUser = (): UseUser => ({ useGetUser, useSignInUser, useLogoutUser });

export default useUser;
