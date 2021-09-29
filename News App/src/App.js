import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

import news_data from './news_data.json';

import NewsCard from './components/NewsCard';
import NewsBanner from './components/NewsBanner';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyNew = item => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>News App </Text>
        <FlatList
          ListHeaderComponent={() => <NewsBanner />}
          keyExtractor={keyNew}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ECEFF1'},
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default App;
