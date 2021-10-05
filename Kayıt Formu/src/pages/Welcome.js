import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button/Button';

const Welcome = ({navigation}) => {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hoşgeldin</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#4B3869',
  },
});
