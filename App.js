/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import InnerApp from './src/InnerApp';
import Routes from './src/routes';
import RootNavigator from './src/navigation/switchNavigator';
import { enableScreens } from 'react-native-screens';


import {Provider} from 'react-redux';
import store from './src/redux/store';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './src/utils/services/graphQLclient';
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
