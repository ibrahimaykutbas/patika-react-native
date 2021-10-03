import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  todos: {
    backgroundColor: '#FFB085',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  todoText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  completed: {
    textDecorationLine: 'line-through',
    textShadowRadius: 5,
  },
});
