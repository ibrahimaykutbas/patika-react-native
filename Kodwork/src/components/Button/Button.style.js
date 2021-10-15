import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f44336',
    minWidth: 175,
    height: 40,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingRight: 5,
  },
});
