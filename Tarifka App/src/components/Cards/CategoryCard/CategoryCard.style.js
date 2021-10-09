import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F4F9F9',
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderTopStartRadius: 40,
    borderBottomStartRadius: 40,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    height: 90,
    alignItems: 'center',
    borderColor: '#FB743E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 25,
  },
  image: {
    width: 100,
    height: 90,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C4C6D',
  },
});
