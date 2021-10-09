import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerTintColor: '#FB743E',
          }}
          component={Categories}
        />
        <Stack.Screen
          name="MealsPage"
          options={{
            title: 'Meals',
            headerTitleAlign: 'center',
            headerTintColor: '#FB743E',
          }}
          component={Meals}
        />
        <Stack.Screen
          name="DetailPage"
          options={{
            title: 'Detail',
            headerTitleAlign: 'center',
            headerTintColor: '#FB743E',
          }}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
