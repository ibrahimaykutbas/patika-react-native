import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Button.style';

const Button = ({title, onPress, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      testID="button-touchable">
      <Text style={styles.primary.title} testID="button-title">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
