import React, {useState, useEffect} from 'react';
import {Text, View} from  'react-native';
import api from '../../services/api';
import styles from './style';

export default function Detail(){
    return(
        <View style={styles.container}>
            <Text>Desenvolvido por: Rodrigo Barreto</Text>
            <Text>Esse sistema é independente de qualquer governo ou instituição.</Text>
        </View>
    )
}