import React from 'react';
// import {Text, Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as screens from '../constant/screens';
import HomeScreen from '../screens/HomeScreen';
import DetailCategory from '../screens/DetailCategory';
import {DetailCategoryNavigation} from './DetailCategoryNavigation';
import {StoryNavigation} from './StoryNavigation';
import NewStoryScreen from '../screens/NewStoryScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';

const Tab = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={screens.COMIC_SCREEN}
      screenOptions={{
        headerShown: false,

        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Tab.Screen name={screens.COMIC_SCREEN} component={HomeScreen} />

      <Tab.Screen
        name={screens.DETAIL_CATEGORY_NAVIGATION}
        component={DetailCategoryNavigation}
        options={{
          headerShown: true,
        }}
      />

      <Tab.Screen
        name={screens.CATEGORY_NAVIGATION} // nghĩ tên cho hợp
        component={DetailCategory}
        options={{
          headerShown: true,
          title: 'Thể loại',
        }}
      />

      <Tab.Screen
        name={screens.STORY_NAVIGATION}
        component={StoryNavigation}
        options={{
          headerShown: true,
          headerBackVisible: false,
        }}
      />

      <Tab.Screen
        name={screens.NEW_STORY_SCREEN}
        component={NewStoryScreen}
        options={{
          headerShown: true,
          title: 'Truyện mới',
          headerBackVisible: true,
        }}
      />

      <Tab.Screen
        name={screens.CHAPTER_DETAIL_SCREEN}
        component={ChapterDetailScreen}
      />
    </Tab.Navigator>
  );
};
