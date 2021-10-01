import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  soldoutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  soldoutTitle: {
    color: 'red',
    fontSize: 12,
  },
});
