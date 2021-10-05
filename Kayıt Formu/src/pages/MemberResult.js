import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  /*  const {user} = route.params;
  {user.name} */
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kayıt Tamamlandı</Text>
    </View>
  );
};

export default MemberResult;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
    color: '#4B3869',
    marginVertical: '50%',
  },
});
