import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

import useAuthToken from '../../hooks/useAuthToken';

import Snack from '../../utils/snack';

import history from '../../utils/history';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_APOLLO_URI });

const authMiddleware = (authToken: string) => new ApolloLink((operation, forward) => {
  if (authToken) {
    operation.setContext({
      headers: {
        authorization: authToken,
      },
    });
  }
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err) => {
      switch (err.extensions!.code) {
        case 'UNAUTHENTICATED':
          localStorage.removeItem('token');
          history.replace('/signin');
          break;
        case 'BAD_USER_INPUT':
          Snack.error(err.message);
          break;
        default:
          Snack.error('Erro inesperado, tente novamente mais tarde.');
          break;
      }
    });
  }
  if (networkError) console.log(networkError);
});

const cache = new InMemoryCache();

const useApolloClient = () => {
  const { token } = useAuthToken();

  return new ApolloClient({
    link: errorLink.concat(authMiddleware(token).concat(httpLink)),
    cache,
    defaultOptions: {
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
};


export default useApolloClient;
