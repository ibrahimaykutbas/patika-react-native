import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({label, placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          selectionColor="#4B3869"
        />
      </View>
    </View>
  );
};

export default Input;
