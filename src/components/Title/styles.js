import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  titleCategory: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    width: '80%'
  },
  buttonShowAll: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textButton: {
    color: '#9A9A9A',
    fontWeight: "300",
  },
  iconArrowRight : {
    width: 9,
    height: 9,
    marginLeft: 5
  },
});