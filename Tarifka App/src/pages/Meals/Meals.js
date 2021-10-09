import React from 'react';
import {View, FlatList} from 'react-native';

import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import styles from './Meals.style';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MealCard from '../../components/Cards/MealsCard/MealCard';

const Meals = ({route, navigation}) => {
  const {category} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.MEALS_API_URL}=${category}`,
  );

  const handleDetailSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderMeal = ({item}) => {
    return (
      <MealCard meal={item} onSelect={() => handleDetailSelect(item.idMeal)} />
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
