import React, {memo} from 'react';
import {Text, StyleSheet, TextInput as NativeInput} from 'react-native';
import {Input, Item, Label} from 'native-base';
import {theme} from '../core/theme';

const TextInput = ({label, errorText, ...props}) => (
  <>
    <Item floatingLabel style={styles.container}>
      <Label style={styles.label}>{label}</Label>
      <Input
        style={styles.input}
        selectionColor={theme.colors.blue[300]}
        {...props}
      />
    </Item>
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: '100%',
  },
  input: {
    width: '100%',
    color: theme.colors.gray[800],
  },
  label: {
    color: theme.colors.blue[200],
    paddingLeft: 4,
    opacity: 0.8,
  },
  error: {
    width: '100%',
    fontSize: 12,
    color: theme.colors.orange[200],
    paddingHorizontal: 4,
  },
});

export default memo(TextInput);
