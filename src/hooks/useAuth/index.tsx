import useSignInUser from './useSignInUser';
import useLogoutUser from './useLogoutUser';
import { UseUser } from './types';

const useUser = (): UseUser => ({ useSignInUser, useLogoutUser });

export default useUser;
