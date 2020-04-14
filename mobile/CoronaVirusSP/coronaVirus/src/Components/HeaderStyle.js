import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    header: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    headerSubText: {
        color: "#a9a9a9",
    },
    menuText:{
        fontSize:16,
        color: "#000",
    }
})