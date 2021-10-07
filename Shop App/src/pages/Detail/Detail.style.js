import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {padding: 10},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  desc: {fontStyle: 'italic', marginVertical: 5, color: 'black'},
  price: {fontWeight: 'bold', fontSize: 22, textAlign: 'right', color: 'black'},
});
