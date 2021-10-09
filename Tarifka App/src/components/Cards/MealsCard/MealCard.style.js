import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBody: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    overflow: 'hidden',
    height: 200,
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold',
    position: 'absolute',
    width: '100%',
    fontSize: 20,
    padding: 5,
    opacity: 1.5,
    backgroundColor: '#000000c0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
