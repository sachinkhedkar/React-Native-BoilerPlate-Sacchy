import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React, {ReactElement} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import DrawerScreen1 from '../screens/drawerScreen1';
import DrawerScreen2 from '../screens/drawerScreen2';
import {useSafeArea} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContent = ({drawerPosition, navigation}) => {
  const insets = useSafeArea();

  return (
    <ScrollView
      contentContainerStyle={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={styles.container}>
      <DrawerItem
        label="Screen1"
        onPress={() => {
          navigation.navigate('DrawerScreen1');
        }}
      />
      <DrawerItem
        label="Screen2"
        onPress={() => {
          navigation.navigate('DrawerScreen2');
        }}
      />
      <DrawerItem
        label="Close"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
    </ScrollView>
  );
};

const Navigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default Navigator;
