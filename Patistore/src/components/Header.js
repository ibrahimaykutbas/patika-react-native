import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>PATISTORE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#053742',
    paddingLeft: 10,
  },
});

export default Header;
