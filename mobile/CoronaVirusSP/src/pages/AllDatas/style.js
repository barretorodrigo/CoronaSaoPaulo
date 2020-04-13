import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center'
    },
    scroll: {
        alignItems: 'center',
    },
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
    boxes:{
        marginTop: 30,
        flexDirection: "row"
    },
    chart:{
        marginTop: 50
    },
    info:{
        fontSize: 8,
        color: "#a9a9a9",
        marginTop:5
    },
    spinner:{
        marginTop: 20
    }
})