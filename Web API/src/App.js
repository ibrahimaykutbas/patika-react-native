import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';

import axios from 'axios';

import UserCard from './components/UserCard/UserCard';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get(url);
    setLoading(false);
    setUserList(response.data);

    /* axios.get(url).then(response => {
      setLoading(false);
      setUserList(response.data);
    }); */
  }

  useEffect(() => {
    getData();
  }, []);

  const renderUser = ({item}) => <UserCard user={item} />;

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
    </View>
  );
};

export default App;
