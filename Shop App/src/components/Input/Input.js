import React from 'react';
import {View, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

const Input = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  value,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Icon name={iconName} size={25} color="black" />
    </View>
  );
};

export default Input;
