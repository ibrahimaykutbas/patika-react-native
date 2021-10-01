import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './SongCard.style';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.song.imageUrl,
        }}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text>{props.song.artist}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldoutContainer}>
              <Text style={styles.soldoutTitle}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
