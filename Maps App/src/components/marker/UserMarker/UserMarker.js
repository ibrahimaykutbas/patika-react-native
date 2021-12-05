import React from 'react';
import {View, Text, Image} from 'react-native';

import {Marker} from 'react-native-maps';

import styles from './UserMarker.style';

const userMarker = ({coordinates, userImageURL, onPress}) => {
  return (
    <Marker coordinate={coordinates} onPress={onPress}>
      <Image style={styles.image} source={{uri: userImageURL}} />
    </Marker>
  );
};

export default userMarker;
