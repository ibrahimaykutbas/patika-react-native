import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';

import FavoriteProvider from './context/FavoriteProvider/FavoriteProvider';

const Router = () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default Router;
