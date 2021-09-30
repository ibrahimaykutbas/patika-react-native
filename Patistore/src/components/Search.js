import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput style={styles.searchBar} placeholder="Search.." />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    backgroundColor: '#E8F0F2',
    borderColor: '#E8F0F2',
    color: '#053742',
  },
});

export default Search;
