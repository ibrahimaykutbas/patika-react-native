import React from 'react';
import {View, Image, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {Formik} from 'formik';
import Config from 'react-native-config';

import styles from './Login.style';
import usePost from '../../hooks/usePost/usePost';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  const dispatch = useDispatch();

  const handleLogin = values => {
    post(`${Config.API_AUTH_URL}/login`, values);
  };

  if (error) {
    Alert.alert('Shop', 'Bir hata oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Shop', 'Kullanıcı bulunamadı!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.bodyContainer}>
            <Input
              placeholder="Kullanıcı adını giriniz.."
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi giriniz.."
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user = {
  id: 1,
  email: 'John@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  address: {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
  },
  phone: '1-570-236-7033',
};
