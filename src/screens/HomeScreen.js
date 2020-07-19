import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';

import {theme} from '../core/theme';
import ApiRequest from '../api/ApiRequest';

export default class HomeScreen extends Component {
  componentDidMount() {
    ApiRequest.forecast5('colombo')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.purpel[900]}
        />
        <Text> Home screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
