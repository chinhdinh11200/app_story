import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  wrapSlide: {
    width: WIDTH,
    height: HEIGHT *0.33
  },
  wrapDot : {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive: {
    margin: 3,
    color: 'red',
    fontSize: 10,
  },
  dot: {
    margin: 3,
    color: '#888',
    fontSize: 10,
  },
  wrapSearch: {
    alignSelf: 'center',
    width: '90%',
    marginVertical: 8
  },
  textInput: {
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 34,
    borderRadius: 50,
    fontSize: 14,
    paddingLeft: 30,
    color: '#D6D6D6'
  },
  searchIcon :{
    position: 'absolute',
    top: '50%',
    left: 5,
    transform: [
      {translateY: -10},
      { rotate: '-10deg'}
    ], 
    width: 20,
    height: 20,
    overflow: 'hidden'
  }, 
  block : {
    marginTop: 40
  },
  content: {
    paddingHorizontal: 15
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  categoryItem: {
    width: '49%',
    height: 90,
    backgroundColor: 'red',
    marginBottom: 10, 
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageCategory: {
    width: '100%',
    height: '100%'
  },
  textCategory: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: '40%',
    fontSize: 20,
    fontWeight: "800",
    textTransform: 'uppercase',
    color: '#FFFFFF',
    // textShadowColor: '#000000',
    // textShadowOffset: {
    //   width: .7,
    //   height: .7
    // },
    // textShadowRadius: 3
  }
});