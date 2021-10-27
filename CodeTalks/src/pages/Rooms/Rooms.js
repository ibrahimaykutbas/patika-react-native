import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import parseData from '../../utils/parseData';

import FloatingButton from '../../components/FloatingButton/FloatingButton';

import InputModal from '../../components/modal/InputModal';

import RoomCard from '../../components/card/RoomCard/RoomCard';

import styles from './Rooms.style';

const Rooms = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);

  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    database()
      .ref('/rooms/')
      .on('value', snapshot => {
        const roomData = snapshot.val();
        const parsedData = parseData(roomData || {});
        setRoomList(parsedData);
      });
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendRoom = content => {
    handleInputToggle();
    sendRoom(content);
  };

  const sendRoom = content => {
    const userMail = auth().currentUser.email;

    const roomObject = {
      room: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref('/rooms/').push(roomObject);
  };

  const onNavigateRoom = id => {
    navigation.navigate('MessagesPage', {roomId: id});
  };

  const renderRoom = ({item}) => (
    <RoomCard room={item} onPress={() => onNavigateRoom(item.id)} />
  );
  return (
    <View style={styles.container}>
      <FlatList data={roomList} renderItem={renderRoom} numColumns="2" />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <InputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendRoom}
        placeholder="Oda adı.."
        title="Ekle"
      />
    </View>
  );
};

export default Rooms;
