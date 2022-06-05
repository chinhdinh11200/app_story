import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import SlideItem from '../SlideItem';
import Title from '../Title';
import {styles} from './styles';
import * as screens from '../../constant/screens';

const Category = ({title, image, navigation, stories}) => {
  return (
    <View style={[styles.category]}>
      <Title title={title} navigation={navigation} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(screens.STORY_NAVIGATION, {story: stories[0]})
          }>
          <SlideItem
            category={true}
            bigItem={true}
            image={image}
            story={stories[0]}
            key={stories[0].id}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          {stories.map((story, index) => {
            if (index !== 0) {
              return (
                <TouchableOpacity
                  key={story.id}
                  onPress={() =>
                    navigation.navigate(screens.STORY_NAVIGATION, {
                      story: story,
                    })
                  }>
                  <SlideItem category={true} image={image} story={story} />
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

export default Category;
