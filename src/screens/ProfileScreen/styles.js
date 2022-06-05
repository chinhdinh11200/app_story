import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  user: {
    width: Dimensions.get('window').width,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  info: {
    marginLeft: 15,
  },
  username: {
    width: 500,
    fontSize: 16,
    fontWeight: "800",
  },
  level: {
    width: 45,
    textAlign: 'center',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 16,
    backgroundColor: 'grey',
    fontSize: 12,
    fontWeight: "800",
  },
  btnLogin: {
    // position: 'absolute',
    // right: 18,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    // backgroundColor: '#ccc',
    marginLeft: 10,
    fontWeight: "800",
    fontSize: 18,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    // borderTopWidth: 1,
    borderColor: "#D9D9D9",
    fontSize: 16,
    fontWeight: "400"
  },
  itemFirst : {
    borderTopWidth: 1
  }
});
