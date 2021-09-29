import React from 'react';
import {ScrollView, StyleSheet, Dimensions, Image} from 'react-native';

import news_banner_data from '../news_banner_data.json';

const NewsBanner = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image
          key={bannerNews.id}
          style={styles.bannerImage}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5,
  },
});

export default NewsBanner;
