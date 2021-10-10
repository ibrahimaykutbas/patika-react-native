import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';

const Primary = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    {
      text !== '' && dispatch({type: 'ADD_NAME', payload: {name: text}});
    }
    setText('');
  };

  const handleSaveUsername = () => {
    {
      username !== '' && dispatch({type: 'ADD_USERNAME', payload: {username}});
    }
    setUsername('');
  };
  return (
    <View>
      <Text style={{fontSize: 40, color: 'black'}}>Form</Text>
      <View style={style}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter name.."
        />
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 5}}>
        <Button title="Add" onPress={handleAdd} />
      </View>
      <View style={style}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username.."
        />
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 5}}>
        <Button title="Save" onPress={handleSaveUsername} />
      </View>
    </View>
  );
};

export default Primary;

const style = {borderWidth: 1, margin: 10, padding: 5, borderColor: '#e0e0e0'};
