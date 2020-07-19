import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import {theme} from '../core/theme';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import {emailValidator, passwordValidator} from '../core/validator';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateEmail = (email) => {
    this.setState({
      email: email,
      emailError: emailValidator(email),
    });
  };

  login = () => {
    // let e = emailValidator(this.state.email);
    let e = '';
    let p = passwordValidator(this.state.password);

    this.setState({
      emailError: e,
      passwordError: p,
    });

    if (e.length == 0 && p.length == 0) {
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <View style={styles.container}>
          <View style={styles.viewContainer}>
            <TextInput
              label="username"
              value={this.state.email}
              errorText={this.state.emailError}
              onChangeText={(val) => this.updateEmail(val)}
              returnKeyType="next"
              autoCapitalize="none"
            />

            <TextInput
              label="password"
              value={this.state.password}
              errorText={this.state.passwordError}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              returnKeyType="done"
              autoCapitalize="none"
              secureTextEntry
            />

            <Button
              title="Login"
              onPress={() => {
                this.login();
              }}
            />
          </View>
        </View>
        <Text style={styles.demo}>demo app by EJ</Text>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  viewContainer: {
    alignSelf: 'baseline',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray[400],
  },
  demo: {
    textAlign: 'center',
    color: theme.colors.gray[500],
  },
});
