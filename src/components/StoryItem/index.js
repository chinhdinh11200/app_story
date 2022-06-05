import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Typography from '../Typography';
import {styles} from './styles';

const StoryItem = ({onPress}) => {
  // alert();
  return (
    <TouchableOpacity style={styles.wrap} onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../../images/sky.jpg')}
        resizeMode="stretch"
      />
      <View style={styles.blockLeft}>
        <Typography style={styles.title}>
          Tên react tag get getr title abvth alignSelf{' '}
        </Typography>
        <View style={styles.blockTag}>
          <Typography style={styles.tag}>Tag fffccc</Typography>
          <Typography style={styles.tag}>Tag fffc ccdd2</Typography>
        </View>
        <View style={styles.blockHot}>
          <View style={styles.hot}>
            <Ionicons name="heart" size={14} color="red" />
            <Typography style={{width: 40, fontWeight: '400', fontSize: 12}}>
              {900 > 1000 ? Math.round((1000 / 1000) * 10) / 10 + 'k' : 900}
            </Typography>
          </View>
          <View style={styles.hot}>
            <Ionicons name="star" size={14} color="red" />
            <Typography style={{width: 40, fontWeight: '400', fontSize: 12}}>
              4.5
            </Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoryItem;
