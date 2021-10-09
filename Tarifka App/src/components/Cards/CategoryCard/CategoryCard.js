import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './CategoryCard.style';

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.cardBody}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
