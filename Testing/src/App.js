import {
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import Button from './components/Button/Button';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const renderElements = ({item}) => <Text>{item}</Text>;

  function addToList() {
    if (!text) return;

    setList([...list, text]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing</Text>

      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={list}
        renderItem={renderElements}
        testID="list"
      />

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add..."
        style={styles.input}
        testID="input-area"
      />
      <Button title="Add" onPress={addToList} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
