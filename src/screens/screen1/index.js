/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
const Screen1 = ({navigation, route}) => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> This is Screen1</Text>

        <Button
          title="Screen2"
          onPress={() => {
            navigation.navigate('Screen2');
          }}
          style={{
            marginBottom: 8,
          }}
        />
      </View>
    </>
  );
};

export default Screen1;
