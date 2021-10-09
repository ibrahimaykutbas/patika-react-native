import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import styles from './DetailCard.style';

const DetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.strMealThumb}} />
      <Text style={styles.title}>{item.strMeal}</Text>
      <Text style={styles.area}>{item.strArea}</Text>
      <Text style={styles.ins}>{item.strInstructions}</Text>
      <TouchableOpacity
        style={styles.youtubeButton}
        onPress={() => Linking.openURL(item.strYoutube)}>
        <Text style={styles.youtubeButtonText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
