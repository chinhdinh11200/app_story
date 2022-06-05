import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';

import Category from '../Category';

const CategoryList = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async url => {
      try {
        const res = await axios.get(url);
        // console.log(res.data.data);
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData('https://penguin1.fun/api/categories');
  }, []);

  return (
    <View>
      {categories.map((category, index) => (
        <Category
          key={category.id}
          title={category.name}
          image={category.image}
          navigation={navigation}
          stories={category.stories}
        />
      ))}
      {/* <Category
        title='Hành động'
        image='https://cdn.pixabay.com/photo/2020/04/23/16/31/watermelon-5083173__340.jpg'
        navigation={navigation}
      />
      <Category
        title='Tình yêu'
        image='https://cdn.pixabay.com/photo/2022/04/23/20/15/black-redstart-7152438__340.jpg'
        navigation={navigation}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryList;
