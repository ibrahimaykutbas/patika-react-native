import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF',
  },
});

export default App;
