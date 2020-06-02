import ApolloClient from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

// import SnackbarUtils from '../utils/snack';

import history from '../../utlis/history';

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
      if (err.extensions!.code === 'UNAUTHENTICATED') {
        localStorage.removeItem('token');
        history.replace('/signin');
      } else if (err.extensions!.code === 'BAD_USER_INPUT') {
        err.extensions!.errors.map((er: any) => (er));
      }
    });
  }
  if (networkError) console.log(networkError);
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
