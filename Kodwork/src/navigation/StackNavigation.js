import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Jobs from '../pages/Jobs/Jobs';
import Detail from '../pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsPage"
        options={{
          title: 'Jobs',
          headerTitleAlign: 'center',
          headerTintColor: '#f44336',
        }}
        component={Jobs}
      />
      <Stack.Screen
        name="JobDetailPage"
        options={({route}) => ({
          title: route.params.levels[0].name
            ? route.params.levels[0].name
            : 'Detail',
          headerTitleAlign: 'center',
          headerTintColor: '#f44336',
        })}
        component={Detail}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
