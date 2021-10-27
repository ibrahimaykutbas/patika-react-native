import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import FloatingButton from '../../components/FloatingButton/FloatingButton';
import InputModal from '../../components/modal/InputModal';
import MesssageCard from '../../components/card/MessageCard/MessageCard';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import parseData from '../../utils/parseData';

import styles from './Messages.style';

const Messages = ({route}) => {
  const id = route.params.roomId;

  const [inputModalVisible, setInputModalVisible] = useState(false);

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    database()
      .ref(`/rooms/${id}/messages`)
      .on('value', snapshot => {
        const messageData = snapshot.val();
        const parsedData = parseData(messageData || {});
        setMessageList(parsedData);
      });
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendMessage = content => {
    handleInputToggle();
    sendMessage(content);
  };

  const sendMessage = content => {
    const userMail = auth().currentUser.email;

    const messageObject = {
      message: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref(`/rooms/${id}/messages`).push(messageObject);
  };

  const renderMessage = ({item}) => <MesssageCard message={item} />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={messageList}
        renderItem={renderMessage}
        ListHeaderComponent={<Text style={styles.header}>Oda Kuruldu</Text>}
      />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <InputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendMessage}
        placeholder="Mesajın.."
        title="Gönder"
      />
    </View>
  );
};

export default Messages;
