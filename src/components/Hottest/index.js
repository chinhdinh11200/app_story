import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Tou} from 'react-native';

import { styles } from './styles';
import StoryItem from '../StoryItem';
import * as screens from '../../constant/screens';
const Hottest = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StoryItem onPress={() => navigation.navigate(screens.STORY_NAVIGATION)} />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </ScrollView>
  );
}

export default Hottest;
