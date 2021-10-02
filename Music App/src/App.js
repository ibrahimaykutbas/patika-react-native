import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import musicList from './db.json';

import SongCard from './components/SongCard/SongCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [list, setList] = useState(musicList);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = musicList.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ListHeaderComponent={<SearchBar onSearch={handleSearch} />}
        keyExtractor={item => item.id}
        data={list}
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
