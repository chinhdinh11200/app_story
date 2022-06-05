import {Dimensions, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40/2
  },
  info : {
    paddingLeft: 10
  },
  level: {
    width: 40,
    textAlign: 'center',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: 'blue',
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: "800",
  },
  moreComment : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30
  },
  action : {
    flexDirection: 'row',
    alignItems: 'center',
  }
})