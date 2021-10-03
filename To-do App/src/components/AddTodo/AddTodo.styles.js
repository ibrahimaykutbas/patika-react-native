import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
    padding: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 30,
    textAlign: 'right',
    color: 'black',
    margin: 20,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flex: 1,
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    /*  borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100, */
  },
  buttonOpen: {
    borderRadius: 50,
    padding: 15,
    elevation: 2,
    width: 50,
    backgroundColor: '#F0A500',
  },
  buttonClose: {
    padding: 15,
    elevation: 2,
    width: '80%',
    backgroundColor: '#F0A500',
    marginTop: 20,
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: '#ECEFF1',
    width: '100%',
  },
});
