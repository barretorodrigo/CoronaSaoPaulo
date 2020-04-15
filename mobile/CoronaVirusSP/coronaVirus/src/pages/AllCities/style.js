import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center'
    },
    scrollView:{
        width: Dimensions.get('window').width
    },
    spinner:{
        marginTop: 20
    },
    headerText:{
        fontSize: 18,
        color: "#797979",
    }
})