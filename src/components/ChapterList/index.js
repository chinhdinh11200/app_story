import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import Typography from '../Typography';
import * as screens from '../../constant/screens';
import {styles} from './styles';

const ChapterList = ({chapters, navigation}) => {
  // console.log(chapters);
  // const [chapters, setChapters] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  // ]);

  // useEffect(() => {
  //   console.log("test");
  //   const fetchData = async (url) => {
  //     try {
  //       const res = await axios.get(url);
  //       // console.log(res.data.data);
  //       setChapters(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       // setIsLoading(true);
  //     }
  //   };
  //   fetchData(`https://penguin1.fun/api/stories/show_all_chapter/${story.id}`);
  // }, []);

  // const renderItem = ({ item }) => {
  //   console.log(item);
  //   return ;
  // };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 6,
        }}>
        <Typography>Đã full</Typography>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Typography> Mới nhất </Typography>
          </TouchableOpacity>
          <TouchableOpacity>
            <Typography> Cũ nhất </Typography>
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
        data={chapters}
        renderItem={renderItem}
        style={{
          marginBottom: 50,
        }}
      /> */}
      {chapters.map((chapter, index) => (
        <TouchableOpacity
          key={chapter.id}
          style={{
            paddingVertical: 8,
            borderBottomWidth: 0.2,
            borderColor: '#9D9D9D',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 10,
          }}
          onPress={() =>
            navigation.navigate(screens.CHAPTER_DETAIL_SCREEN, {
              chapter_id: chapter.id,
            })
          }>
          <Typography style={{fontSize: 14, fontWeight: '600'}}>
            {index + 1}. {chapter.name}
          </Typography>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Typography
              style={{color: '#9D9D9D', fontSize: 12, marginRight: 10}}>
              {moment(chapter.created_at).format('DD/MM/YYYY')}
            </Typography>
            {/* <Typography
              style={{ color: '#9D9D9D', fontSize: 12, marginRight: 10 }}
            >
              <Ionicons
                name='heart-outline'
                size={12}
                color='#9D9D9D'
                style={{ marginRight: 3 }}
              />
              12345
            </Typography> */}
            <Typography
              style={{color: '#9D9D9D', fontSize: 12, marginRight: 10}}>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={12}
                color="#9D9D9D"
                style={{marginRight: 3}}
              />
              12345
            </Typography>
          </View>
        </TouchableOpacity>
      ))}
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <TouchableOpacity>
          <Typography
            style={{
              paddingVertical: 14,
              backgroundColor: '#F84849',
              fontSize: 18,
              fontWeight: '700',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Đọc truyện
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChapterList;
