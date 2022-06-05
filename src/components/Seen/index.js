import React from 'react';
import {View, Text} from 'react-native';

import { styles } from './styles';
import StoryItem from '../StoryItem';

const Seen = () => {
  return (
    <View style={styles.container}>
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </View>
  );
}

export default Seen;
