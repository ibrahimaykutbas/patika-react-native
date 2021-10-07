import React from 'react';

import LottiView from 'lottie-react-native';

const Loading = () => {
  return <LottiView source={require('../../assets/loading.json')} autoPlay />;
};

export default Loading;
