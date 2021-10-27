import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    minHeight: 100,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  username: {
    color: 'black',
  },
  date: {
    color: 'black',
  },
  roomText: {
    color: 'black',
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
