import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StatusBar} from  'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderStyle from './HeaderStyle';
import {useNavigation} from '@react-navigation/native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import api from '../services/api';

export default function Header(props){

    const navigation = useNavigation();
    const menu = useRef();
    const hideMenu = () => menu.current.hide();
    const showMenu = () => menu.current.show();
    const [lastUpdate, setLastUpdate] = useState('');

    function navigateToDetail(){
        menu.current.hide();
        navigation.navigate('Detail');
    }

    function navigateToAllCities(){
        menu.current.hide();
        navigation.navigate('AllCities');
    }

    function navigateToMap(){
        menu.current.hide();
        navigation.navigate('Map');
    }

    async function loadingLastUpdate(){
        const response = await api.get('/update',{});
        setLastUpdate(response.data);
    }

    useEffect(()=>{
        loadingLastUpdate()
    }, [])

    return(
        <View style={HeaderStyle.header}>
            <View>
            <StatusBar backgroundColor="#9F000F" barStyle='light-content' />
                <Text style={HeaderStyle.headerText}>Estado de São Paulo</Text>
                <Text style={HeaderStyle.headerSubText}>Última atualização em: {lastUpdate.lastUpdate} </Text>
            </View>
            <View>
                <Menu ref={menu} button={
                   
                        <Entypo onPress={()=>showMenu()} name="dots-three-vertical" size={20} color="#000" />
                   
                    }>
                    <MenuItem onPress={()=>navigateToAllCities()}>
                        <MaterialCommunityIcons name="map-search" size={14} color="#9F000F"/>
                        <Text style={HeaderStyle.menuText}>Cidades</Text>
                    </MenuItem>
                    <MenuItem onPress={()=>navigateToMap()}>
                        <MaterialCommunityIcons name="map-search" size={14} color="#9F000F"/>
                        <Text style={HeaderStyle.menuText}>Mapa</Text>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={()=>navigateToDetail()}>
                        <MaterialIcons name="live-help" size={14} color="#9F000F"/>
                        <Text style={HeaderStyle.menuText}>Sobre</Text>
                    </MenuItem>
                </Menu>
                
            </View>
        </View>
    );
}