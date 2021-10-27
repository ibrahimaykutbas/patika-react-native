import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import Modal from 'react-native-modal';

import styles from './InputModal.style';

import Button from '../Button/Button';

const InputModal = ({visible, onClose, onSend, placeholder, title}) => {
  const [text, setText] = useState(null);

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="left"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#808e95"
            color="black"
            onChangeText={setText}
            multiline
          />
        </View>
        <Button title={title} onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default InputModal;
