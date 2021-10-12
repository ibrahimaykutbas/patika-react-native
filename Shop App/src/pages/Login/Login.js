import React from 'react';
import {View, Image, Alert} from 'react-native';

import {Formik} from 'formik';
import Config from 'react-native-config';

import styles from './Login.style';
import usePost from '../../hooks/usePost/usePost';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

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
      navigation.navigate('ProductsPage');
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
