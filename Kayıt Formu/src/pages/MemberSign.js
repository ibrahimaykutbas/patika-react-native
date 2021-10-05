import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';

import Input from '../components/Input/Input';

import Button from '../components/Button/Button';

const MemberSign = ({navigation}) => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [mail, setMail] = useState(null);
  const [homeland, setHomeland] = useState(null);

  const handleSubmit = () => {
    if (!name || !surname || !age || !mail || !homeland) {
      Alert.alert('Power Fitness', 'Bilgiler boş bırakılamaz.');
      return;
    }
    const user = {
      name,
      surname,
      age,
      mail,
      homeland,
    };
    navigation.navigate('MemberResultScreen', {user});
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>Kayıt Bilgileri </Text>
        <Input
          label="Üye Adı"
          placeholder="Üyenin adını giriniz.."
          onChangeText={setName}
        />
        <Input
          label="Üye Soyadı Adı"
          placeholder="Üyenin soyadını giriniz.."
          onChangeText={setSurname}
        />
        <Input
          label="Üye Yaşı"
          placeholder="Üyenin yaşını giriniz.."
          onChangeText={setAge}
        />
        <Input
          label="Üye E-posta"
          placeholder="Üyenin e-posta adresini giriniz.."
          onChangeText={setMail}
        />
        <Input
          label="Üye Memleketi"
          placeholder="Üyenin memleketini giriniz.."
          onChangeText={setHomeland}
        />

        <Button text="Kaydı Tamamla" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default MemberSign;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
    color: '#4B3869',
  },
});
