import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import Typography from '../Typography';

const Comment = () => {
  return (
    <View style={styles.wrap}>
      <Image
        source={require('../../../images/avatar.jpg')}
        style={styles.avatar}
        resizeMode="stretch"
      />
      <View style={styles.info}>
        <View>
          <Typography>Name</Typography>
          <Typography style={styles.level}>Lv.01</Typography>
          <Typography
            numberOfLines={1}
            style={{marginTop: 4, paddingRight: 50}}>
            Comment Comment Comment Comment aga gahg wtga agaehb
          </Typography>
        </View>
        <Typography
          style={{
            fontWeight: '500',
            color: '#9A9A9A',
            fontSize: 12,
            marginTop: 4,
          }}>
          Chapter 1
        </Typography>
        <View style={styles.moreComment}>
          <Typography
            style={{
              fontWeight: '500',
              color: '#9A9A9A',
              fontSize: 12,
            }}>
            1/12/2000
          </Typography>
          <View style={styles.action}>
            <Typography style={{color: '#9A9A9A'}}>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={14}
                color="#9A9A9A"
              />
              3
            </Typography>
            <Ionicons
              name="ellipsis-vertical-sharp"
              size={14}
              color="#9A9A9A"
              style={{marginLeft: 4}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comment;
