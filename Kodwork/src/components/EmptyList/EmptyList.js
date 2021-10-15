import React from 'react';
import {View, Text} from 'react-native';

import styles from './EmptyList.style';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty List</Text>
    </View>
  );
};

export default EmptyList;
