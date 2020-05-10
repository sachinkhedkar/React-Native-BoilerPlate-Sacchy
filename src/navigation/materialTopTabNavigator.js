import {MaterialTopTabNavigationProp, createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {ReactElement} from 'react';

import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Screen4 from '../screens/screen4';

const Tab = createMaterialTopTabNavigator();

const SwitchNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'blue' },
      }}
    >
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{ tabBarLabel: 'Custrom4' }}
      />
    </Tab.Navigator>
  );
};

export default SwitchNavigator;
