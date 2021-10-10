import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};

const reducers = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {...state, counter: state.counter + 1};

    case 'DECREASE_COUNTER':
      return {...state, counter: state.counter - 1};

    default:
      return state;
  }
};

export default () => {
  const store = createStore(reducers, initialState);
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

const First = () => {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({type: 'INCREASE_COUNTER'});
  };
  return (
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text style={{fontSize: 30, color: 'black'}}>First: {counter}</Text>
      <Button title="Increase" onPress={handleIncrease} />
    </View>
  );
};

const Second = () => {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    counter > 0 && dispatch({type: 'DECREASE_COUNTER'});
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, color: 'black'}}>Second: {counter}</Text>
      <Button title="Decrease" onPress={handleDecrease} />
    </View>
  );
};
