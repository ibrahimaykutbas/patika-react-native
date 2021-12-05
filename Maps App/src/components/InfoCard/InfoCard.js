import React from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import styles from './InfoCard.style';

const InfoCard = ({visible = 'true', close, user}) => {
  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackButtonPress={close}
      onBackdropPress={close}
      backdropOpacity={0.2}
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.fullname}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.data}>{user.username}</Text>
      </View>
    </Modal>
  );
};

export default InfoCard;
