import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigation';
import FavoriteJobs from '../pages/FavoritesJobs/FavoriteJobs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#f44336',
        drawerInactiveTintColor: 'black',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{headerShown: false, title: 'Jobs'}}
      />
      <Drawer.Screen
        name="FavoriteJobsPage"
        component={FavoriteJobs}
        options={{title: 'Favorite', headerTintColor: '#f44336'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
