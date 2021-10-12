import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          options={{
            title: 'Login',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
          }}
          component={Login}
        />
        <Stack.Screen
          name="ProductsPage"
          options={{
            title: 'Shop',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
          }}
          component={Products}
        />
        <Stack.Screen
          name="DetailPage"
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
