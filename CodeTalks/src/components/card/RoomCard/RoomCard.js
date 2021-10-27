import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './RoomCard.style';

const RoomCard = ({room, onPress}) => {
  return (
    <View styles={styles.container}>
      <TouchableOpacity style={styles.roomContainer} onPress={onPress}>
        <Text style={styles.roomText}>{room.room}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;
