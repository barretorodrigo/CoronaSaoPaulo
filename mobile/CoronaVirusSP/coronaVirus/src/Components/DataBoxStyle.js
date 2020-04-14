import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    box:{
        borderWidth: 1,
        borderColor: "#a9a9a9",
        padding: 10,
        minWidth: 120,
        alignItems: "center",
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,
    },
    value:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#9F000F"
    },
    text:{
        fontSize: 12,
        textTransform: "uppercase"
    }
})