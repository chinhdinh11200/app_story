import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TextInput } from 'react-native';
import axios from 'axios';

import { styles } from './style.js';
import SlideItem from '../../../src/components/SlideItem/index.js';
import Title from '../../../src/components/Title/index.js';
import CategoryList from '../../components/CategoryList/index.js';
import Typography from '../../components/Typography/index.js';

const images = [
  'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__480.jpg',
  'https://cdn.pixabay.com/photo/2022/05/01/15/02/art-7167741__340.png',
  'https://cdn.pixabay.com/photo/2021/09/24/02/54/jellyfish-6651202__340.jpg',
  'https://cdn.pixabay.com/photo/2021/03/22/01/58/monk-6113501__340.png',
  'https://cdn.pixabay.com/photo/2021/11/11/07/23/lake-6785552__340.jpg',
];
const HomeScreen = ({navigation}) => {
  const [slideActive, setSlideActive] = useState(0);
  const [newStories, setNewStories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await axios.get(url);
        setNewStories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData('https://penguin1.fun/api/stories/new_story');
  }, []);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await axios.get(url);
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData('https://penguin1.fun/api/categories');
  }, []);

  const onSlideScroll = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != slideActive) {
        setSlideActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapSearch}>
          <TextInput
            style={styles.textInput}
            placeholder='Tác giả/Tác phẩm'
            placeholderTextColor='#B9B9B9'
          />
          <Image
            source={require('../../../images/icon/search.png')}
            style={styles.searchIcon}
            resizeMode='contain'
          />
        </View>

        <View style={styles.wrapSlide}>
          <ScrollView
            onScroll={({ nativeEvent }) => onSlideScroll(nativeEvent)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.wrapSlide}
          >
            {images.map((image, index) => (
              <Image
                style={styles.wrapSlide}
                source={{ uri: image }}
                key={index}
                resizeMode='stretch'
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((image, index) => (
              <Text
                key={index}
                style={slideActive == index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.block}>
          <Title title='Truyện mới' navigation={navigation} category={false} newStory={true} />
          <View style={styles.content}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {newStories.map((story) => (
                <SlideItem 
                  key={story.id} 
                  // image={story.image}
                  // name={story.name}
                  story={story}
                  categories={story.tags}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        <CategoryList navigation={navigation} />

        <View style={styles.block}>
          <Title title='Thể loại' navigation={navigation} category={true} />
          <View style={[styles.content, styles.categoryList]}>
            {
              categories.map((category) => (
                <View style={styles.categoryItem} key={category.id}>
                  <Image
                    source={{ uri: category.image}}
                    style={styles.imageCategory}
                    resizeMode='stretch'
                  />
                  <Typography style={styles.textCategory}>{category.name}</Typography>
                </View>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
