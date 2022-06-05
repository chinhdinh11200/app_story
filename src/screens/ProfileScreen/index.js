import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import * as screens from '../../constant/screens';
import Typography from '../../components/Typography';

const ProfileScreen = ({ navigation }) => {
  const [login, setLogin] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={require('../../../images/sky.jpg')}
          resizeMode='stretch'
        />
        {login ? (
          <View style={styles.info}>
            <Typography style={styles.username}>Đinh Chỉnh</Typography>
            <Typography style={styles.level}>Lv.01</Typography>
          </View>
        ) : (
          <Typography
            onPress={() => navigation.navigate(screens.LOGIN_SCREEN)}
            style={styles.btnLogin}
          >
            Bấm để đăng nhập
          </Typography>
        )}
      </View>
      {login ? (
        <View style={styles.content}>
          <TouchableOpacity>
            <Typography style={[styles.item, styles.itemFirst]}>Chỉnh sửa trang cá nhân</Typography>
          </TouchableOpacity>
          <TouchableOpacity>
            <Typography style={styles.item}>Nâng cấp vip</Typography>
          </TouchableOpacity>
          <TouchableOpacity>
            <Typography style={styles.item}>Đăng xuất</Typography>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default ProfileScreen;
