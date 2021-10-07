import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.username}</Text>
      <View style={styles.innerContainer}>
        <Text>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    marginVertical: 5,
    padding: 5,
  },
  email: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'gray',
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
