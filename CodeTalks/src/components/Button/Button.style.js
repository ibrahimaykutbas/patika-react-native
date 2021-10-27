import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#ffa270',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),

  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
    },
    text: {
      ...baseStyle.text,
      color: '#ff7043',
    },
  }),
};
