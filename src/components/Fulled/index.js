import React from 'react';
import {View, ScrollView} from 'react-native';

import { styles } from './styles';
import StoryItem from '../StoryItem';
const Fulled = () => {
  return (
    <ScrollView style={styles.container}>
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </ScrollView>
  );
}

export default Fulled;
