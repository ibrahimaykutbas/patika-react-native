import React, {useState} from 'react';
import {View, Text, Modal, Pressable, TextInput} from 'react-native';

import styles from './AddTodo.styles';

const AddTodo = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const [todo, setTodo] = useState('');
  return (
    <View style={styles.container}>
      <Modal
        animationType="slider"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder="To-do enter.."
              onChangeText={item => setTodo(item)}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                {
                  todo !== '' && props.addTodo(todo);
                }
                setTodo('');
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;
