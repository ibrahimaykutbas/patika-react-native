import React from 'react';
import LottiView from 'lottie-react-native';

const Error = () => {
  return (
    <LottiView
      source={require('../../assets/error.json')}
      autoPlay
      style={{backgroundColor: '#FB743E'}}
    />
  );
};

export default Error;
