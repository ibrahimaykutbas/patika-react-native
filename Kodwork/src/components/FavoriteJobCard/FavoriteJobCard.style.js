import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBody: {
    width: Dimensions.get('window').width * 0.95,
    height: 150,
    backgroundColor: 'white',
    margin: 10,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  content: {
    flex: 1,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  company: {
    fontSize: 14,
    color: 'black',
  },
  country: {
    backgroundColor: '#f44336',
    fontSize: 14,
    fontWeight: 'bold',
    width: 140,
    maxWidth: 200,
    padding: 1,
    borderRadius: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 2,
  },
  levels: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#f44336',
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: '#f44336',
    width: 350,
    borderRadius: 5,
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
    alignSelf: 'center',
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
