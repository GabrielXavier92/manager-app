import ApolloClient from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

import Snack from '../../utils/snack';

import history from '../../utils/history';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      token: token ? `${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err) => {
      switch (err.extensions!.code) {
        case 'UNAUTHENTICATED':
          console.log(err.message);
          localStorage.removeItem('token');
          history.replace('/signin');
          break;
        case 'BAD_USER_INPUT':
          console.log(err.message);
          Snack.error(err.message);
          break;
        default:
          console.log('Erro inesperado, tente novamente mais tarde.');
          break;
      }
    });
  }
  if (networkError) console.log(networkError);
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: 'ignore',
    },
  },
});

export default client;
