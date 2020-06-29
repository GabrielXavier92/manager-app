import { useCookies } from 'react-cookie';

interface IUseAuthToken {
  token: any;
  setAuthToken(authToken: any): void;
  removeAuthToken(): void;
  tokenName: string;
}

export const TOKEN_NAME = 'authToken';

// Hook para gerenciar os tokens da aplicacao
const useAuthToken = (): IUseAuthToken => {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);

  const setAuthToken = async (authToken: any) => setCookie(TOKEN_NAME, authToken);

  const removeAuthToken = () => removeCookie(TOKEN_NAME);

  return {
    token: cookies[TOKEN_NAME], setAuthToken, removeAuthToken, tokenName: TOKEN_NAME,
  };
};

export default useAuthToken;
