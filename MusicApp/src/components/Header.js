import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>Çalma Listem</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5,
  },
});
