import {
  MaterialBottomTabNavigationProp,
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Screen4 from '../screens/screen4';

const Tab = createMaterialBottomTabNavigator();

const TabBarIcon = focused => {
  return (
    <View>
      <Text>Ic</Text>
    </View>
  );
};

const Navigator = () => {
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
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
};

export default Navigator;
