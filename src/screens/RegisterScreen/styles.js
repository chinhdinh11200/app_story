import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const HEIGHT_BUTTON = 55;
const BORDERED_BUTTON = 30;
export const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT * 0.90,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '80%',
    // backgroundColor: 'blue',
  },
  imageBlock: {
    width: 140,
    height: 140,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 40
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputBlock: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  input: {
    width: '95%',
    height: HEIGHT_BUTTON,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: BORDERED_BUTTON,
    marginTop: 25,
    paddingLeft: 50,
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    fontSize: 28,
    bottom: 15,
    left: 10,
    color: 'purple',
    paddingRight: 6
  },
  iconEye: {
    position: 'absolute',
    fontSize: 28,
    bottom: 13,
    right: 12,
    color: 'purple',
  },
  buttonBlock: {
    width: '95%',
    height: HEIGHT_BUTTON,
    marginTop: 20,
    // borderWidth: 1,
    backgroundColor: 'purple',
    alignSelf: 'center',
    borderRadius: BORDERED_BUTTON,
  },
  button: {
    height: HEIGHT_BUTTON,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600'
  },
  actionBlock:{
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    color: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textColor: {
    color: 'purple',
    textAlignVertical: 'center',
  },
  textButton : {
    // width: 2000,
    textDecorationLine: "underline",
  },
  iconCheck: {
    fontSize: 18,
    color: 'purple',
    padding: 10
  },
  textCheck: {
    color: 'purple',
    // marginLeft: 10
  }
});