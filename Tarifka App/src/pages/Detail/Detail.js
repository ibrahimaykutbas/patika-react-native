import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';

const Detail = ({route}) => {
  const {id} = route.params;

  const {data, loading, error} = useFetch(`${Config.DETAIL_API_URL}=${id}`);

  const renderDetail = ({item}) => {
    return <DetailCard item={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
};

export default Detail;
