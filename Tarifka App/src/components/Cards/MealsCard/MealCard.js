import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback, Alert} from 'react-native';

import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.cardBody}>
          <Image style={styles.image} source={{uri: meal.strMealThumb}} />
          <Text numberOfLines={1} style={styles.title}>
            {meal.strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
