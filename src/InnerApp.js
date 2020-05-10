/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableHighlight} from 'react-native';
import allActions from './redux/actions';

const InnerApp = () => {
  const counter = useSelector(state => state.counter);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const user = {name: 'Sachin', userName: 'sacchykhedkar@gmail.com', password: ''};

  useEffect(() => {
     dispatch(allActions.userActions.setUser(user));
  }, []);
  console.log(currentUser);
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {currentUser.loggedIn && (
          <View style={{padding: 10, margin: 10}}>
            <Text style={{padding: 10, margin: 10}}>
              Hello, {currentUser.user.name}
            </Text>
            <TouchableHighlight
              style={{padding: 10, margin: 10}}
              onPress={() => dispatch(allActions.userActions.logOut())}>
              <Text> Logout </Text>
            </TouchableHighlight>
          </View>
        )}

        {!currentUser.loggedIn && (
          <View style={{padding: 10}}>
            <Text style={{padding: 10, margin: 10}}>Login </Text>
            <TouchableHighlight
            style={{padding: 10, margin: 10}}
              onPress={() => dispatch(allActions.userActions.setUser(user))}>
              <Text> Login as Sachin </Text>
            </TouchableHighlight>
          </View>
        )}

        <View style={{padding: 10}}>
          <Text> Counter: {counter} </Text>
          <TouchableHighlight
            onPress={() => dispatch(allActions.counterActions.increment())}>
            <Text> Increase Counter </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => dispatch(allActions.counterActions.decrement())}>
            <Text> Decrease Counter </Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default InnerApp;
