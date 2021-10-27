import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="white"
        value={value}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
