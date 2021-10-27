import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FlashMessage from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

import Login from './pages/auth/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Rooms from './pages/Rooms/Rooms';
import Messages from './pages/Messages/Messages';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <Icon
                name="logout"
                size={25}
                color="black"
                onPress={() => auth().signOut()}
              />
            ),
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 25},
          }}>
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{
              title: 'Odalar',
            }}
          />
          <Stack.Screen
            name="MessagesPage"
            component={Messages}
            options={{title: 'Mesajlar'}}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
