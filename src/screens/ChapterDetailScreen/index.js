import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
// import {WebView} from 'react-native-webview';
import axios from 'axios';

import {styles} from './styles';

const ChapterDetailScreen = ({route, navigation}) => {
  const {chapter_id} = route.params;
  // const [content, setContent] = useState('');

  // useEffect(() => {
  //   const fetchData = async url => {
  //     try {
  //       const res = await axios.get(url);
  //       console.log(res.data.content);
  //       setContent(res.data.content);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       // setIsLoading(true);
  //     }
  //   };
  //   fetchData(`https://penguin1.fun/api/chapters/show/${chapter_id}`);
  // }, [chapter_id]);

  return (
    // <WebView
    //   style={styles.content}
    //   source={{uri: content}}
    //   originWhitelist={['*']}
    // />
    <Text>ccccc</Text>
  );
};

export default ChapterDetailScreen;
