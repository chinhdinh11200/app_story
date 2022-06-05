import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
      <Image source={require('../../../images/sky.jpg')} style={styles.banner} resizeMode='stretch' /> 
  );
}

const styles = StyleSheet.create({})

export default Header;
