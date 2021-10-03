import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';

import uuid from 'react-native-uuid';

import styles from './Todos.styles';

import AddTodo from '../AddTodo/AddTodo';

const Todos = props => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    props.getTodos(todos);
  }, [todos]);

  const handleStatus = id => {
    const selected = todos.find(item => item.id === id);
    selected.status = !selected.status;
    setTodos([...todos]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const renderTodos = ({item}) => (
    <View style={styles.todos}>
      <TouchableHighlight
        onPress={() => handleStatus(item.id)}
        onLongPress={() => removeTodo(item.id)}
        underlayColor="">
        <Text
          style={[styles.todoText, item.status === true && styles.completed]}>
          {item.title}
        </Text>
      </TouchableHighlight>
    </View>
  );

  const handleTodo = item => {
    setTodos([...todos, {id: uuid.v4(), title: item, status: false}]);
  };

  return (
    <View style={styles.container}>
      <FlatList data={todos} renderItem={renderTodos} />
      <AddTodo addTodo={handleTodo} />
    </View>
  );
};

export default Todos;
