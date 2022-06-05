import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

import * as screens from '../../constant/screens';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const continueButtonCLick = () => {
    alert(username);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageBlock}>
          {/* <Image source={require('../../../images/download.png')} /> */}
          <Image
            source={require('../../../images/icon_app.png')}
            style={styles.image}
            resizeMode='stretch'
          />
        </View>

        <View style={styles.inputBlock} onPress={Keyboard.dismiss}>
          <Ionicons name='person-outline' style={styles.icon} />
          <TouchableWithoutFeedback>
            <TextInput
              style={styles.input}
              placeholder='Tên đăng nhập(*)'
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonBlock}
            onPress={continueButtonCLick}
          >
            <Text style={styles.button}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
