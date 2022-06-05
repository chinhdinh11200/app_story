import React from 'react';
import {Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Seen from '../components/Seen';
import Liked from '../components/Liked';

const Tab = createMaterialTopTabNavigator();

export const LikedNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          width: '100%',
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Seen}
        options={{
          tabBarLabel: 'Đã đọc',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Liked}
        options={{
          tabBarLabel: 'Đã thích',
        }}
      />
    </Tab.Navigator>
  );
};
