import 'react-native-gesture-handler';
import * as React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './../screens/home';
import DetailScreen from './../screens/details';

import ProfileScreen from './../screens/profile';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'My Home',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          initialParams={{itemId: 42, otherParam: 'test'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          //options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
