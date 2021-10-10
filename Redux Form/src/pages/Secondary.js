import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Secondary = () => {
  const list = useSelector(item => item.nameList);
  const userName = useSelector(item => item.username);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch({type: 'CLEAN_LIST'});
  };

  return (
    <View>
      <Text style={{fontSize: 40, color: 'black'}}>Name List</Text>
      <Text style={{fontSize: 40, color: 'black'}}>Username:{userName}</Text>

      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      <View style={{margin: 10}}>
        <Button title="Clear" onPress={handleClear} />
      </View>
    </View>
  );
};

export default Secondary;
