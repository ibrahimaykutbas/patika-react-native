import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from './pages/FirstScreen.js';
import SecondScreen from './pages/SecondScreen.js';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          options={{title: 'First Screen'}}
          component={FirstScreen}
        />
        <Stack.Screen
          name="SecondScreen"
          options={{title: 'Second Screen'}}
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
