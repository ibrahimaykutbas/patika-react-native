import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.style';

const Button = ({title, iconName}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={iconName} size={25} color="white" style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
