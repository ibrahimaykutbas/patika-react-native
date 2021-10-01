import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import musicList from './db.json';

import SongCard from './components/SongCard/SongCard';
import Header from './components/Header';

const App = () => {
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header />}
        keyExtractor={item => item.id}
        data={musicList}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
