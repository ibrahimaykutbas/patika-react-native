import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const First = ({navigation}) => {
  const navigateToPage = () => {
    navigation.navigate('SecondScreen', {username: 'ibrahimaykutbas'});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Screen</Text>
      <Button title="Go to second screen" onPress={navigateToPage} />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: 'bold', color: 'black'},
});
