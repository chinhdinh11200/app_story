import React, { useState, useLayoutEffect } from 'react';
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
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    isCheck: false,
  });

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
      return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  const registerButtonCLick = () => {
    alert(userInfo.username + userInfo.password + userInfo.confirmPassword);
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
              value={userInfo.username}
              onChangeText={(text) =>
                setUserInfo({
                  ...userInfo,
                  username: text,
                })
              }
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputBlock}>
          <Ionicons name='lock-closed-outline' style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder='Mật khẩu(*)'
            value={userInfo.password}
            onChangeText={(text) =>
              setUserInfo({
                ...userInfo,
                password: text,
              })
            }
          />
          <Ionicons name='eye-off-outline' style={styles.iconEye} />
        </View>
        <View style={styles.inputBlock}>
          <Ionicons name='lock-closed-outline' style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder='Nhập lại mật khẩu(*)'
            value={userInfo.confirmPassword}
            onChangeText={(text) =>
              setUserInfo({
                ...userInfo,
                confirmPassword: text,
              })
            }
          />
          <Ionicons name='eye-off-outline' style={styles.iconEye} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonBlock}
            onPress={registerButtonCLick}
          >
            <Text style={styles.button}>Đăng kí</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionBlock}>
          <Ionicons
            name={userInfo.isCheck ? 'checkbox-outline' : 'square-outline'}
            style={styles.iconCheck}
            onPress={() =>
              setUserInfo({
                ...userInfo,
                isCheck: !userInfo.isCheck,
              })
            }
          />
          <Text style={styles.textCheck}>
            Bạn đồng ý với{' '}
            <Text style={{ textDecorationLine: 'underline' }}>điều khoản</Text>
          </Text>
        </View>

        <View style={styles.actionBlock}>
          <Text style={styles.textColor}>
            Đã có tài khoản?{' '}
            <Text
              style={styles.textButton}
              onPress={() => navigation.navigate(screens.LOGIN_SCREEN)}
              numberOfLines={1}
            >
              {' '}
              Đăng nhập{' '}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
