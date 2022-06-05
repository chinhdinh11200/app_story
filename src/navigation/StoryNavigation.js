import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import axios from 'axios';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as screens from '../constant/screens';
import DetailStory from '../components/DetailStory';
import ChapterList from '../components/ChapterList';

const Tab = createMaterialTopTabNavigator();

export const StoryNavigation = ({route, navigation}) => {
  const {story} = route.params;
  const [storyDetail, setStoryDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [chapters, setChapters] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  // const { story } = ;

  useEffect(() => {
    const fetchData = async url => {
      try {
        const res = await axios.get(url);
        setStoryDetail(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    };
    fetchData(`https://penguin1.fun/api/stories/detail/${story.id}`);
  }, [story]);

  useEffect(() => {
    const fetchChapterData = async url => {
      try {
        const res = await axios.get(url);
        setChapters(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(true);
      }
    };

    fetchChapterData(
      `https://penguin1.fun/api/stories/show_all_chapter/${story.id}`,
    );
  }, [story]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Image
          source={{uri: story.image}}
          // source={require('../../images/sky.jpg')}
          resizeMode="stretch"
          style={{
            height: 0.22 * Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
          }}
        />
      ),
      headerTitleStyle: {
        flex: 1,
      },
    });
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, [navigation, story]);

  if (!isLoading) {
    return <View></View>;
  }

  return (
    <Tab.Navigator
      initialRouteName={screens.STORY_DETAIL_SCREEN}
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          width: '100%',
        },
        tabBarActiveTintColor: '#F84849',
        tabBarInactiveTintColor: '#4C4C4C',
        title: 'cccc',
      }}>
      <Tab.Screen
        name={screens.STORY_DETAIL_SCREEN}
        children={() => (
          <DetailStory story={storyDetail} tags={storyDetail.tags} />
        )}
        options={{
          tabBarLabel: 'Chi tiết',
        }}
      />
      <Tab.Screen
        name="Settings"
        children={() => (
          <ChapterList
            chapters={chapters}
            story={story}
            navigation={navigation}
          />
        )}
        options={{
          tabBarLabel: 'Chương',
        }}
      />
    </Tab.Navigator>
  );
};
