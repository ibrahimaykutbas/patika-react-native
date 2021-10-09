import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F9',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4C4C6D',
    paddingHorizontal: 10,
  },
  area: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C4C6D',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  ins: {
    fontSize: 15,
    color: '#2B2B2B',
    borderTopWidth: 1,
    borderColor: '#FB743E',
    paddingHorizontal: 10,
    paddingTop: 5,
    fontWeight: '500',
  },
  youtubeButton: {
    backgroundColor: 'red',
    marginHorizontal: 15,
    marginVertical: 10,
    height: 50,
    padding: '2%',
    borderRadius: 5,
  },
  youtubeButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
