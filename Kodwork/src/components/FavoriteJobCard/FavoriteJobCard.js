import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useDispatch} from 'react-redux';

import styles from './FavoriteJobCard.style';

const FavoriteJobCard = ({job, onSelect}) => {
  const dispatch = useDispatch();

  const removeFavorite = id => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {id}});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.cardBody}>
          <View style={styles.content}>
            <View style={styles.left}>
              <Text style={styles.title} numberOfLines={1}>
                {job.name}
              </Text>
              <Text style={styles.company}>{job.company.name}</Text>
              <Text style={styles.country}>
                {job.locations && job.locations.length > 0
                  ? job.locations[0].name
                  : 'No information'}
              </Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.levels}>{job.levels[0].name}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => removeFavorite(job.id)}>
              <Text style={styles.text}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteJobCard;
