import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Button as NativeButton, Text} from 'native-base';
import {theme} from '../core/theme';

const Button = ({bordered, style, title, ...props}) => (
  <NativeButton
    full
    style={[styles.button, style]}
    bordered={bordered}
    {...props}>
    <Text
      style={[
        styles.text,
        // {color: bordered ? theme.colors.blue[500] : theme.colors.white},
      ]}>
      {title}
    </Text>
  </NativeButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 4,
    borderColor: theme.colors.purpel[300],
    backgroundColor: theme.colors.purpel[800],
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default memo(Button);
