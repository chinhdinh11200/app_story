import React from 'react';
import { View, Text, Image } from 'react-native';

import * as screens from '../../constant/screens';
import Typography from '../Typography';
import { styles } from './styles';

const Title = ({ title, navigation, category, newStory }) => {
  return (
    <View style={styles.titleCategory}>
      <Typography style={styles.title}>{title}</Typography>
      <View style={styles.buttonShowAll}>
        <Typography
          style={styles.textButton}
          onPress={() =>
            navigation.navigate(
              category ? screens.CATEGORY_NAVIGATION : ( newStory ? screens.NEW_STORY_SCREEN : screens.DETAIL_CATEGORY_NAVIGATION),
              { title : title }
            )
          }
        >
          Thêm
        </Typography>
        <Image
          source={require('../../../images/icon/arrow-point-to-right.png')}
          style={styles.iconArrowRight}
        />
      </View>
    </View>
  );
};

export default Title;
