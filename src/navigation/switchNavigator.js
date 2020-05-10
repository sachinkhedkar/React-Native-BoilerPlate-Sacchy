import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import BottomTabNavigator from './bottomTabNavigator';
import DrawerNavigator from './drawerNavigator';
import Intro from '../screens/intro';
import MaterialBottomTabNavigator from './materialBottomTabNavigator';
import MaterialTopTabNavigator from './materialTopTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './stackNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {color: '#000000'},
          headerTintColor: '#FFFFFF',
        }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="MaterialTopTabNavigator"
          component={MaterialTopTabNavigator}
        />
        <Stack.Screen
          name="MaterialBottomTabNavigator"
          component={MaterialBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
