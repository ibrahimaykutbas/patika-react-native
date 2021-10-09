import React from 'react';
import {View, FlatList} from 'react-native';

import Config from 'react-native-config';

import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import CategoryCard from '../../components/Cards/CategoryCard/CategoryCard';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(`${Config.CATEGORIES_API_URL}`);

  const handleMealsSelect = category => {
    navigation.navigate('MealsPage', {category});
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleMealsSelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;
