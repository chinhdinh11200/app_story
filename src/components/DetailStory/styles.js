import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  detail: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  hotBlock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    backgroundColor: '#F6F6F6',
    paddingVertical: 10,
    borderRadius: 5,
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  descBlock: {
    marginTop: 10,
  },
  desc: {},
  buttonMore: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -20 / 2 }],
    width: 20,
    justifyContent: 'center',
  },
  tagBlock: {
    marginTop: 20,
    flexDirection: 'row',
  },
  tagItem: {
    marginRight: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#F8F8F8',
    color: '#999999',
  },
  authorBlock: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  author: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '700',
  },

  commentBlock: {
    backgroundColor: '#FFFFFF',
    // height: 400,
    marginTop: 12,
    paddingHorizontal: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  iconArrowRight: {
    width: 9,
    height: 9,
  },
  mentionBlock: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 60,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  mentionItem: {
    width: '32%',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
});
