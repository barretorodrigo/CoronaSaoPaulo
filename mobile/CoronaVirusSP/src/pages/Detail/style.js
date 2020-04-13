import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    image:{
        height: 150,
        resizeMode: "center"
    },
    link:{
        color: "#9F000F",
        textDecorationLine:"underline"
    }
})