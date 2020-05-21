/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import InnerApp from './src/InnerApp';
import Routes from './src/routes';
import RootNavigator from './src/navigation/switchNavigator';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';



import {Provider} from 'react-redux';
import store from './src/redux/store';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './src/utils/services/graphQLclient';
enableScreens();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
