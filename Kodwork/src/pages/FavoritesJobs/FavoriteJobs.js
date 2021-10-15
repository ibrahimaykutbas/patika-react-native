import React from 'react';
import {useSelector} from 'react-redux';

import {View, FlatList} from 'react-native';

import FavoriteJobCard from '../../components/FavoriteJobCard/FavoriteJobCard';

import EmptyList from '../../components/EmptyList/EmptyList';

const FavoriteJobs = ({navigation}) => {
  const favorites = useSelector(favorite => favorite.favoriteList);

  const handleJobSelect = (id, levels) => {
    navigation.navigate('JobDetailPage', {id, levels});
  };

  const renderFavorites = ({item}) => {
    return (
      <FavoriteJobCard
        job={item}
        onSelect={() => handleJobSelect(item.id, item.levels)}
      />
    );
  };

  return (
    <View>
      {favorites.length > 0 ? (
        <FlatList data={favorites} renderItem={renderFavorites} />
      ) : (
        <EmptyList />
      )}
    </View>
  );
};

export default FavoriteJobs;
