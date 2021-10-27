import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Formik} from 'formik';

import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

import styles from './Sign.style';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialFormvalues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('LoginPage');
  };

  const handleFormSubmit = async formValues => {
    if (!formValues.usermail && !formValues.password) {
      showMessage({
        message: 'E-posta adresi ve şifre alanları doldurulmak zorunda!',
        type: 'danger',
      });
      return;
    }

    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor!',
        type: 'danger',
      });
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu.',
        type: 'success',
      });
    } catch (error) {
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
              <Input
                placeholder="Şifrenizi tekrar giriniz"
                value={values.repassword}
                onType={handleChange('repassword')}
                isSecure={true}
              />
              <Button
                title="Kayıt Ol"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>

        <Button title="Giriş Yap" theme="secondary" onPress={handleSignUp} />
      </View>
    </View>
  );
};

export default Sign;
