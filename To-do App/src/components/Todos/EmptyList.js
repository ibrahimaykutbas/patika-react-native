import React from 'react';
import {View, Text} from 'react-native';

import styles from './Todos.styles';

const EmptyList = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Empty List</Text>
    </View>
  );
};

export default EmptyList;
