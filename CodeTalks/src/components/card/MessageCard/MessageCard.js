import React from 'react';
import {View, Text} from 'react-native';

import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

import styles from './MessageCard.style';

const RoomCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View styles={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.username}>{message.username}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.roomText}>{message.message}</Text>
      </View>
    </View>
  );
};

export default RoomCard;
