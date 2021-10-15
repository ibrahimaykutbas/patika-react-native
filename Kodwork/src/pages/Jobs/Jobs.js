import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import Config from 'react-native-config';

import styles from './Jobs.style';

import More from '../../components/PageButton/PageButton';

import useFetch from '../../hooks/useFetch/useFetch';

import JobCard from '../../components/JobCard/JobCard';

const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    page;
  }, []);

  const {data, loading, error} = useFetch(
    `${Config.JOBS_API_URL}?page=${page}`,
  );

  const handlePage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#f44336"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  const renderJobs = ({item}) => {
    return (
      <JobCard
        job={item}
        onSelect={() => handleJobSelect(item.id, item.levels)}
      />
    );
  };

  const handleJobSelect = (id, levels) => {
    navigation.navigate('JobDetailPage', {id, levels});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJobs}
        ListFooterComponent={<More onPress={handlePage} />}
      />
    </View>
  );
};

export default Jobs;
