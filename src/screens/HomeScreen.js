import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Thumbnail} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {theme, background, dayStateIcon} from '../core/theme';
import {dataManupulate} from '../core/utils';
import ApiRequest from '../api/ApiRequest';
import {FlatList} from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      city: {},
      list: [],
    };
    this.dataList = [];
  }

  componentDidMount() {
    this.setState({isLoading: true});
    ApiRequest.forecast5('colombo')
      .then((res) => {
        this.setState({isLoading: false});
        if (res.cod == '200') {
          this.dataList = dataManupulate(res.list, res.city.timezone);

          this.setState({city: res.city});
        }
      })
      .catch((err) => {
        this.setState({isLoading: false});
        alert(err.data.message);
        console.log(err);
      });
  }
  getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <LinearGradient
            colors={background()}
            style={{flex: 1, width: '100%', justifyContent: 'center'}}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={background()[0]}
            />
            <ActivityIndicator size="large" color={theme.colors.white} />
          </LinearGradient>
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
            <Image source={dayStateIcon()} style={styles.dayStateIcon} />
            <View style={{flex: 1, margin: 5}}>
              <FlatList
                nestedScrollEnabled={true}
                data={this.dataList}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                renderItem={({item}) => (
                  <View style={{marginEnd: 20}}>
                    <View style={styles.flatMainText}>
                      <Text style={styles.flatMainTextDay}>{item.day}</Text>
                      <Text style={styles.flatMainTextDate}>{item.date}</Text>
                    </View>

                    <View>
                      <FlatList
                        horizontal
                        style={styles.flatSub}
                        data={item.data}
                        keyExtractor={(item, index) => {
                          return item.id;
                        }}
                        renderItem={({item}) => (
                          <View style={styles.flatSubMain}>
                            <Text style={styles.weatherTime}>{item.time}</Text>
                            <Thumbnail source={{uri: item.weather[0].icon}} />
                            <Text style={styles.weatherTemp}>
                              {item.main.temp}º
                            </Text>
                          </View>
                        )}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
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
  dayStateIcon: {height: 150, width: 150, alignSelf: 'center', margin: 20},
  weatherTime: {
    fontSize: 12,
    color: theme.colors.white,
    width: '100%',
    textAlign: 'center',
  },
  weatherTemp: {
    fontSize: 13,
    fontWeight: 'bold',
    color: theme.colors.white,
    width: '100%',
    textAlign: 'center',
  },
  flatMainText: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  flatMainTextDay: {
    fontWeight: 'bold',
    color: theme.colors.white,
    marginEnd: 20,
  },
  flatMainTextDate: {
    fontSize: 10,
    color: theme.colors.white,
    textAlignVertical: 'bottom',
    bottom: 0,
  },
  flatSub: {marginBottom: 30, marginTop: 8, alignSelf: 'flex-start'},
  flatSubMain: {
    paddingEnd: 40,
    justifyContent: 'center',
  },
});
