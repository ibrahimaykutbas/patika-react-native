import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {useDispatch} from 'react-redux';

import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Config from 'react-native-config';

import styles from './Detail.style';

import useFetch from '../../hooks/useFetch/useFetch';

const Detail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.JOBS_API_URL}/${id}`);

  const dispatch = useDispatch();

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#f44336"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  const handleFavorite = job => {
    dispatch({type: 'ADD_FAVORITE', payload: {job}});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.locationsTitle}>
          Locations:{' '}
          <Text style={styles.locationText}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'No information'}
          </Text>
        </Text>
        <Text style={styles.LevelTitle}>
          Job Level:{' '}
          <Text style={styles.LevelText}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'No information'}
          </Text>
        </Text>
        <Text style={styles.bodyTitle}>Job Detail </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <HTMLView value={data.contents} stylesheet={styles} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="login" size={25} color="white" style={styles.icon} />
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleFavorite(data)}>
            <Icon name="heart" size={25} color="white" style={styles.icon} />
            <Text style={styles.text}>Favorite</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
