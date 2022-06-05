import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Newest from '../components/Newest';
import Hottest from '../components/Hottest';
import Fulled from '../components/Fulled';

const Tab = createMaterialTopTabNavigator();

export const DetailCategoryNavigation = ({route, navigation}) => {
  const {title} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, [navigation, title]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          width: '100%',
          textAlignVertical: 'center',
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          height: 45,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Hottest}
        options={{
          tabBarLabel: 'Hot nhất',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Newest}
        options={{
          tabBarLabel: 'Mới nhất',
        }}
      />
      <Tab.Screen
        name="ccc"
        component={Fulled}
        options={{
          tabBarLabel: 'Đã full',
        }}
      />
    </Tab.Navigator>
  );
};
