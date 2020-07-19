import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme, background, dayStateIcon} from '../core/theme';
import ApiRequest from '../api/ApiRequest';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      city: {},
      list: [],
    };
    this.dayArray = [];
    this.day1Array = [];
    this.day2Array = [];
    this.day3Array = [];
    this.day4Array = [];
    this.day5Array = [];
  }

  componentDidMount() {
    this.setState({isLoading: true});
    ApiRequest.forecast5('colombo')
      .then((res) => {
        this.setState({isLoading: false});
        if (res.cod == '200') {
          // console.log(res.city);
          let list = res.list;
          if (list && list.length > 0) {
            list.map((item) => {
              let today = new Date().getDate();

              let itemDate = new Date(
                item.dt * 1000 - res.city.timezone * 1000,
              ).getDate();

              if (today == itemDate) {
                this.dayArray.push(item);
              } else if (itemDate == today + 1) {
                this.day1Array.push(item);
              } else if (itemDate == today + 2) {
                this.day2Array.push(item);
              } else if (itemDate == today + 3) {
                this.day3Array.push(item);
              } else if (itemDate == today + 4) {
                this.day4Array.push(item);
              } else if (itemDate == today + 5) {
                this.day5Array.push(item);
              }
            });
          }
          this.setState({city: res.city});
        }
      })
      .catch((err) => {
        this.setState({isLoading: false});
        // alert(err.data.message);
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color={theme.colors.purpel[500]} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <LinearGradient colors={background()} style={{flex: 1}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={background()[0]}
          />
          <View style={{flex: 4}}>
            <View style={styles.city}>
              <Text style={styles.cityName}>{this.state.city.name}</Text>
              <Text style={styles.country}>{this.state.city.country}</Text>
            </View>
            <Image
              source={dayStateIcon()}
              style={{height: 150, width: 150, alignSelf: 'center', margin: 20}}
            />
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: 'white',
            }}>
            <Text> Home screen </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  city: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cityName: {
    fontSize: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  country: {
    fontSize: 10,
    color: theme.colors.white,
    textAlignVertical: 'bottom',
    bottom: 10,
  },
});
