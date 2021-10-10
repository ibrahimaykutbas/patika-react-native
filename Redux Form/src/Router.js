import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

import UserProvider from './context/Provider';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
