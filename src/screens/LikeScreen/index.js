import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from './styles';

const LikeScreen = ({navigation}) => {
  return (
    <View>
      <Button title='Test' onPress={() => navigation.navigate('comic')}/>
    </View>
  );
}

// export default LikeScreen;
