import React from 'react';
import {View, Text, Button} from 'react-native';

const MemberDetail = ({navigation}) => {
  return (
    <View>
      <Text>Member Detail</Text>
      <Button
        title="Member Update"
        onPress={() => navigation.navigate('MemberUpdateScreen')}
      />
    </View>
  );
};

export default MemberDetail;
