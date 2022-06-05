import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const Typography = props => {
  return (
    <Text {...props} style={[props.style]}>
      {props.children}
    </Text>
  );
};

export default Typography;
