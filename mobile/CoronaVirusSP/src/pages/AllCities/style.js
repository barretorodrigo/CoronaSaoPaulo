import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center'
    },
    scrollView:{
        width: Dimensions.get('window').width
    }
})