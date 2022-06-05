import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    width: '100%', //Dimensions.get('window').width -20,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .2,
    elevation: 5
  },
  image: {
    width : Dimensions.get('window').width * 0.27,
    height: 135,
    borderRadius: 8,
    // marginRight: 8
  },
  blockLeft: {
    width : Dimensions.get('window').width * 0.69,
    height: '100%',
    position: 'absolute',
    top: 3,
    right: 0,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  blockHot: {
    position: 'absolute',
    bottom: 6,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  hot: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockTag : {
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 2,
  },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
    marginTop: 4,
    backgroundColor: '#ccc',
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "500"
  }
})