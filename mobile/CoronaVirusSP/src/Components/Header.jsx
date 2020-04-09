import React, {useRef} from 'react';
import {Text, View, Dimensions, ScrollView, TouchableOpacity, StatusBar} from  'react-native';
import {Entypo, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import HeaderStyle from './HeaderStyle';
import {useNavigation} from '@react-navigation/native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default function Header(props){

    const navigation = useNavigation();
    const menu = useRef();
    const hideMenu = () => menu.current.hide();
    const showMenu = () => menu.current.show();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    return(
        <View style={HeaderStyle.header}>
            <View>
            <StatusBar backgroundColor="#9F000F" barStyle='light-content' />
                <Text style={HeaderStyle.headerText}>Estado de São Paulo</Text>
                <Text style={HeaderStyle.headerSubText}>Última atualização em: {props.lastUpdate} </Text>
            </View>
            <View>
                <Menu ref={menu} button={
                   
                        <Entypo onPress={showMenu} name="dots-three-vertical" size={20} color="#000" />
                   
                    }>
                    <MenuItem onPress={hideMenu}>
                        <MaterialCommunityIcons name="map-search" size={14} color="#9F000F"/>
                        <Text style={HeaderStyle.menuText}>Cidades</Text>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={hideMenu}>
                        <MaterialIcons name="live-help" size={14} color="#9F000F"/>
                        <Text style={HeaderStyle.menuText}>Sobre</Text>
                    </MenuItem>
                </Menu>
                
            </View>
        </View>
    );
}