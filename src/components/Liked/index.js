import React from 'react';
import {View, Text} from 'react-native';

import { styles } from './styles';
import StoryItem from '../StoryItem';

const Liked = () => {
  return (
    <View style={styles.container}>
      <StoryItem />
    </View>
  );
}

export default Liked;
