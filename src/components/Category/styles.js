import {StyleSheet} from 'react-native';

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: '100%',
  },
  category: {
    marginTop: 50,
  },
  titleCategory: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    width: '80%',
  },
  buttonShowAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    color: '#9A9A9A',
  },
  iconArrowRight: {
    width: 9,
    height: 9,
    marginLeft: 5,
  },
});
