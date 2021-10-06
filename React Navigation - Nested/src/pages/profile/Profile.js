import React from 'react';
import {View, Text, Button} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Hello Profile</Text>
      <Button
        title="Profil Edit"
        onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </View>
  );
};

export default Profile;
