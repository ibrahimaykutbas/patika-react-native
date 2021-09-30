import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import products from '../assets/db.json';

import Search from './Search';
import ProductList from './ProductList';

const Content = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Search />}
        data={products}
        renderItem={({item}) => <ProductList product={item} />}
        numColumns="2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
export default Content;
