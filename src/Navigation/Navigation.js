import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from '../core/theme';

import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default class Navigation extends Component {
  constructor() {
    super();
    this.isNight = new Date().getHours() >= 18 ? true : false;
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: this.isNight
                ? theme.colors.gray[900]
                : theme.colors.orange[900],
            },
            headerTintColor: theme.colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
