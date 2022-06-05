import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as screens from '../constant/screens';
import {AuthNavigation} from './AuthNavigation';
import {LikedNavigation} from './LikedNavigation';
import {HomeNavigation} from './HomeNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#9D9D9D',
        headerShown: false,
        headerStyle: {
          height: 50,
        },
        headerTitleStyle: {
          textAlign: 'center',
          alignSelf: 'center',
        },
        tabBarStyle: {
          paddingVertical: 5,
          height: 60,
        },
        tabBarIconStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name={screens.HOME_NAVIGATION}
        component={HomeNavigation}
        options={{
          tabBarLabelStyle: {marginBottom: 8},
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screens.LIKE_NAVIGATION}
        component={LikedNavigation}
        options={{
          title: 'Tủ sách',
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarLabelStyle: {marginBottom: 8},
          tabBarLabel: 'Tủ sách',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.AUTH_NAVIGATION}
        component={AuthNavigation}
        options={{
          tabBarLabelStyle: {marginBottom: 8},
          tabBarLabel: 'Tôi',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'person-circle-outline' : 'person-circle'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#9D9D9D',
  },
  labelActive: {
    color: 'tomato',
  },
  labelCommon: {
    fontSize: 12,
    marginBottom: 5,
  },
});
