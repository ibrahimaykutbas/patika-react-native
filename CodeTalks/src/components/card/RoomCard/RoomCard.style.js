import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  roomContainer: {
    backgroundColor: 'white',
    margin: 10,
    width: 185,
    height: deviceSize.height / 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    elevation: 2,
  },
  roomText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ff7043',
  },
});
