import React from 'react';
import {Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Loading from './components/Loading/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  const user = useSelector(user => user.user);

  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          {!userSession ? (
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
          ) : (
            <>
              <Stack.Screen
                name="ProductsPage"
                options={{
                  title: 'Shop',
                  headerStyle: {backgroundColor: '#64b5f6'},
                  headerTitleStyle: {color: 'white'},
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'white',
                          marginRight: 5,
                        }}>
                        {user.name.firstname}
                      </Text>
                      <Icon
                        name="logout"
                        size={30}
                        color="white"
                        onPress={() => dispatch({type: 'REMOVE_USER'})}
                      />
                    </>
                  ),
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
            </>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
