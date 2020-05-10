import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {ReactElement} from 'react';

import {Image, Text, View} from 'react-native';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Screen4 from '../screens/screen4';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused)=> {
  return (
    <View>
      <Text>Ic</Text>
    </View>
  );
};

const MaterialBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: ({focused}) => TabBarIcon(focused),
      }}>
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: 'Screen1',
          tabBarIcon: ({focused}) => TabBarIcon(focused),
        }}
      />
      <Tab.Screen name="screen2" component={Screen2} />
      <Tab.Screen name="screen3" component={Screen3} />
      <Tab.Screen name="screen4" component={Screen4} />
    </Tab.Navigator>
  );
};

export default MaterialBottomTabNavigator;
