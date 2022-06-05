import { View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Typography from '../Typography'

export default function SlideItem({category, bigItem, categories, story}) {
  // console.log(story.name);
  return (
    <View style={[styles.container]}>
      <View style={[bigItem ? styles.bigItem : styles.wrapItem, !category ? styles.marginRight : '']}>
        <View style={bigItem ? styles.bigTextItem : styles.textItem}>
          <Typography style={bigItem ? styles.bigTitle : styles.title} numberOfLines={2}>
            {story.name} 
          </Typography>
          <View style={[styles.typeTextItem, category ? styles.hidden : '']}>
            {
              categories?.map((category, index) => (
                <Text key={index} style={styles.textCategory} numberOfLines={1}> {category.name} </Text>
              ))
            }
          </View>
        </View>
        <Image
          source={{ uri: story.image }}
          resizeMode='stretch'
          style={bigItem ? styles.bigImageItem : styles.imageItem}
        />
      </View>
    </View>
  )
}