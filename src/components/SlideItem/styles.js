import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const styles = StyleSheet.create({ 
    wrapItem: {
        width: WIDTH * 0.3,
        height: HEIGHT * 0.28,
        // marginRight: 
    },
    marginRight: {
        marginRight: 5
    },
    textItem: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '30%',
    },
    typeTextItem: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 2,
        overflow: 'hidden'
    },
    textCategory: {
        width: '50%',
        color: '#9D9D9D',
        fontSize: 10,
        fontWeight: "400",
    },
    title: { 
        marginTop: 3,
        width: '100%',
        fontWeight: "600"
    },
    imageItem: {
        width: '100%',
        height: '70%',
        borderRadius: 10
    },
    hidden: {
        display: 'none'
    },
    bigItem: {
        width: WIDTH * 0.28,
        height: HEIGHT * 0.24,
        width : '100%',
    },
    bigImageItem: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    bigTextItem: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        bottom: 10,
        left: 15,
    },
    bigTitle : {
        fontSize: 16,
        fontWeight: "600",
        color: '#FFFFFF'
    }
});