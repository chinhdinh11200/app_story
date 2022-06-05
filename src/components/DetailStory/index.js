import React, {useState, useEffect} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import Typography from '../Typography';
import Comment from '../Comment';

const DetailStory = ({story}) => {
  const [numberOflines, setNumberOflines] = useState(3);
  const tags = story.tags;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detail}>
          <View style={styles.hotBlock}>
            <View style={[styles.like, styles.block]}>
              <Typography>{story.like} </Typography>
              <Typography>Số like</Typography>
            </View>
            <View style={[styles.star, styles.block]}>
              <Typography>
                {story.rate} <Ionicons name="star" size={14} color="red" />
              </Typography>
              <Typography>Đánh giá</Typography>
            </View>
            <View style={[styles.star, styles.block]}>
              <Typography>
                4.5 <Ionicons name="star" size={14} color="red" />
              </Typography>
              <Typography>Đánh giá</Typography>
            </View>
          </View>

          <View style={styles.descBlock}>
            <Typography style={styles.status}>
              {story.status ? 'Đã full' : 'Đang cập nhật'}
            </Typography>
            <Typography
              style={styles.desc}
              numberOfLines={numberOflines}
              ellipsizeMode="middle">
              {story.desc}
            </Typography>
            <TouchableOpacity
              onPress={() => {
                numberOflines ? setNumberOflines(null) : setNumberOflines(3);
              }}>
              <Ionicons
                name={numberOflines ? 'chevron-down' : 'chevron-up'}
                size={18}
                color="#C7C7C7"
                style={[styles.buttonMore]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.tagBlock}>
            {tags?.map(tag => (
              <TouchableOpacity key={tag.id}>
                <Typography style={styles.tagItem}>{tag.name}</Typography>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.authorBlock}>
            <Image
              source={require('../../../images/icon_app.png')}
              resizeMode="stretch"
              style={{width: 45, height: 45}}
            />
            <Typography style={styles.author}>{story.author.name}</Typography>
          </View>
        </View>

        <View style={styles.commentBlock}>
          <View style={styles.title}>
            <Typography style={{fontSize: 16, fontWeight: '800'}}>
              Bình luận nổi bật
            </Typography>
            <TouchableOpacity>
              <Typography
                style={[
                  {fontSize: 12, fontWeight: '400', color: '#9A9A9A'},
                  styles.allComment,
                ]}>
                {12345 > 1000
                  ? Math.round((12345 / 1000) * 10) / 10 + 'k'
                  : 900}{' '}
                bình luận
                <Image
                  source={require('../../../images/icon/arrow-point-to-right.png')}
                  style={styles.iconArrowRight}
                  resizeMode="stretch"
                />
              </Typography>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Comment />
            <Comment />
            <Comment />
          </View>
          <TouchableOpacity>
            <Typography
              style={{
                textAlign: 'center',
                color: '#F84849',
                width: '100%',
                borderTopWidth: 0.19,
                borderColor: '#9D9D9D',
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
              }}>
              Tất cả bình luận
            </Typography>
          </TouchableOpacity>
        </View>

        <View style={styles.mentionBlock}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View
              style={[
                {
                  marginLeft: index % 3 != 0 ? '2%' : '0%',
                },
                styles.mentionItem,
              ]}
              key={index}>
              <Image
                style={styles.image}
                source={require('../../../images/sky.jpg')}
                resizeMode="stretch"
              />
              <Typography
                style={{fontSize: 15, fontWeight: '600'}}
                numberOfLines={2}>
                Tên truyện dài
              </Typography>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailStory;
