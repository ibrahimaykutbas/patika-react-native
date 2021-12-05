import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';

import MapView from 'react-native-maps';

import UserMarker from './components/marker/UserMarker/UserMarker';
import Loading from './components/Loading/Loading';
import InfoCard from './components/InfoCard/InfoCard';

import useFetch from './hooks/useFetch';

const App = () => {
  const mapRef = useRef();

  const [user, setUser] = useState();
  const [modalVisibility, setModalVisibility] = useState(false);

  const {data, loading, error} = useFetch(
    'https://random-data-api.com/api/users/random_user?size=50',
  );

  const renderUserMarker = () => {
    return data.map(
      ({
        id,
        first_name,
        last_name,
        username,
        avatar,
        address: {coordinates},
      }) => {
        return (
          <UserMarker
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            userImageURL={avatar}
            onPress={() =>
              handleMarkerSelect(coordinates, {
                first_name,
                last_name,
                username,
              })
            }
          />
        );
      },
    );
  };

  function handleMarkerSelect(coor, selectedUser) {
    setUser(selectedUser);
    handleModalVisibility();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  }

  function handleModalVisibility() {
    setModalVisibility(!modalVisibility);
  }

  return (
    <View style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}}>
        {data && renderUserMarker()}
      </MapView>
      {loading && <Loading />}
      {user && (
        <InfoCard
          user={user}
          visible={modalVisibility}
          close={handleModalVisibility}
        />
      )}
    </View>
  );
};

export default App;
