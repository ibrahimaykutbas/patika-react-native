import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './JobCard.style';

const JobCard = ({job, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.cardBody}>
          <View style={styles.left}>
            <Text style={styles.title} numberOfLines={1}>
              {job.name}
            </Text>
            <Text style={styles.company}>{job.company.name}</Text>
            <Text style={styles.country}>
              {job.locations && job.locations.length > 0
                ? job.locations[0].name
                : 'No information'}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.levels}>{job.levels[0].name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
