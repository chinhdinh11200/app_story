import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import * as screens from '../../constant/screens'

const LoginScreen = ({navigation}) => {
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
      
        <View style={styles.inputBlock}>
          <Ionicons name='person-outline' style={styles.icon} />
          <TextInput 
            style={styles.input}
            placeholder="Tên đăng nhập"
          />
        </View>
        <View style={styles.inputBlock}>
          <Ionicons name='lock-closed-outline' style={styles.icon} />
          <TextInput 
            style={styles.input}
            placeholder="Mật khẩu"
          />
          <Ionicons name='eye-outline' style={styles.iconEye} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonBlock}
          >
            <Text style={styles.button}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionBlock}>
          <TouchableOpacity>
            <Text style={styles.textColor} onPress={() => navigation.navigate(screens.REGISTER_SCREEN)}>Đăng kí ngay</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[{ width: 120 }, styles.textColor]} onPress={() => navigation.navigate(screens.FORGOT_PASSWORD_SCREEN)} >Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
