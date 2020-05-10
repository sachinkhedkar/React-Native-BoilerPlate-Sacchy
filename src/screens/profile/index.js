/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
const ProfileScreen = ({navigation, route}) => {
 
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> This is Profile Screen </Text>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    </>
  );
};

export default ProfileScreen;
