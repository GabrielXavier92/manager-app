import React from 'react';
import { AppProvider } from '@shopify/polaris';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './utils/snack';

import AppRoutes from './routes';

import client from './config/apollo';

export default function App() {
  const theme = {
    colors: {
      topBar: {
        background: '#357997',
      },
    },
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };

  return (
    <ApolloProvider client={client}>
      <AppProvider
        theme={theme}
        i18n={{}}
      >
        <SnackbarProvider maxSnack={8} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <SnackbarUtilsConfigurator />
          <Router>
            <Route path="/" component={AppRoutes} />
          </Router>
        </SnackbarProvider>

      </AppProvider>
    </ApolloProvider>
  );
}
