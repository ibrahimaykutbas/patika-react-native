import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SecondScreen = ({navigation, route}) => {
  /* const user = route.params.username; */
  const {username} = route.params;
  const backToFirst = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <Text style={styles.message}>Welcome! {username}</Text>
      <Button title="Go back" onPress={backToFirst} />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: 'bold', color: 'black'},
  message: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});
