import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './PageButton.style';

const Button = ({onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>More</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
