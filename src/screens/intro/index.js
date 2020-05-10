/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

//import {Container, Title} from './style';
import styled from 'styled-components';


const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: palevioletred;
`;


const Intro = ({navigation, route}) => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Title>Intor Page</Title>

        <Button
          title="Stack Navigator"
          onPress={() => {
            navigation.navigate('StackNavigator');
          }}
          style={{
            marginBottom: 8,
          }}
        />

        <Button
          title="Drawer Navigator"
          onPress={() => {
            navigation.navigate('DrawerNavigator');
          }}
          style={{
            marginBottom: 8,
          }}
        />

        <Button
          title="BottomTab Navigator"
          onPress={() => {
            navigation.navigate('BottomTabNavigator');
          }}
          style={{
            marginBottom: 8,
          }}
        />

        <Button
          title="MaterialTopTab Navigator"
          onPress={() => {
            navigation.navigate('MaterialTopTabNavigator');
          }}
          style={{
            marginBottom: 8,
          }}
        />

        <Button
          title="MaterialBottomTab Navigator"
          onPress={() => {
            navigation.navigate('MaterialBottomTabNavigator');
          }}
          style={{
            marginBottom: 8,
          }}
        />
      </View>
    </>
  );
};

export default Intro;
