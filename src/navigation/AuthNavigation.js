import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as screens from '../constant/screens';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ForgotPassword from '../screens/ForgotPassword';

const Tab = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={screens.PROFILE_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#9D9D9D',
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 5,
        },
        tabBarIconStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name={screens.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{}}
      />
      <Tab.Screen
        name={screens.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          title: 'Đăng nhập',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={screens.REGISTER_SCREEN}
        component={RegisterScreen}
        options={{
          title: 'Đăng kí',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={screens.FORGOT_PASSWORD_SCREEN}
        component={ForgotPassword}
        options={{
          title: 'Quên mật khẩu',
          headerShown: true,
          headerTitleAlign: 'center',
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
