import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from './Button.style';

const Button = ({title, theme = 'primary', onPress, loading}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Text style={styles[theme].text}>
        {loading ? <ActivityIndicator size="small" color="white" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
