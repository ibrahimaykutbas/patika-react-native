import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';

const App = () => {
  const button = (title, process) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#e3f2fd',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 5,
          marginBottom: 10,
          color: 'black',
        }}
        onPress={process}>
        <Text style={{color: 'black'}}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => console.log(res))
      .catch(err => console.log(err));
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => console.log('Signed in..'))
      .catch(err => console.log(err));
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('Signed out..'))
      .catch(err => console.log(err));
  };

  const checkOut = () => {
    const user = auth().currentUser;
    console.log(user);
  };

  const checkDB = () => {
    const reference = database().ref();
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };

  const listenDB = () => {
    const reference = database().ref('');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });
  };

  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A8',
      price: 128,
    });
  };

  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      model: 'A3',
    });
  };

  const pushDB = () => {
    const reference = database().ref('car');
    reference.push({
      brand: 'Passat',
      model: '81',
      price: 650,
    });
  };

  const removeDB = () => {
    const reference = database().ref('car');
    reference.remove();
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 100,
          marginBottom: 10,
        }}>
        Transactions
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {button('Sign Up', signUp)}
        {button('Sign In', signIn)}
        {button('Sign Out', signOut)}
        {button('Check User', checkOut)}
        {button('Check DB', checkDB)}
        {button('Listen DB', listenDB)}
        {button('Set DB', setDB)}
        {button('Update DB', updateDB)}
        {button('Push DB', pushDB)}
        {button('Remove DB', removeDB)}
      </ScrollView>
    </View>
  );
};

export default App;
