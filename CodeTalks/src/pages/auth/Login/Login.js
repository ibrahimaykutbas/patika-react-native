import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

import styles from './Login.style';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormvalues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  const handleFormSubmit = async formValues => {
    if (!formValues.usermail && !formValues.password) {
      showMessage({
        message: 'E-posta adresi ve şifre alanları doldurulmak zorunda!',
        type: 'danger',
      });
      return;
    }

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Başarılı!',
        type: 'success',
      });
      navigation.navigate('RoomsPage');
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>codetalks</Text>
      </View>
      <View style={styles.formContainer}>
        <Formik initialValues={initialFormvalues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                placeholder="E-posta adresinizi giriniz"
                value={values.usermail}
                onType={handleChange('usermail')}
              />
              <Input
                placeholder="Şifrenizi giriniz"
                value={values.password}
                onType={handleChange('password')}
                isSecure={true}
              />
              <Button
                title="Giriş Yap"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button title="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
      </View>
    </View>
  );
};

export default Login;
