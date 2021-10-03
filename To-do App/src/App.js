import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

const App = () => {
  const [count, setCount] = useState(0);

  const getTodos = todos => {
    const filtered = todos.filter(todo => todo.status === false);
    setCount(filtered.length);
  };

  return (
    <View style={styles.container}>
      <Header count={count} />
      <Todos getTodos={getTodos} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirector: 'row',
    backgroundColor: '#334756',
  },
});
