import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AllStoryScreen = ({route, navigation}) => {
  const { title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title
    });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);
  return (
    <View>
      <Text >{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default AllStoryScreen;
