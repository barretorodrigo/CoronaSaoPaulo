import React, {useState, useEffect} from 'react';
import {Text, View, Image, Linking} from  'react-native';
import styles from './style';

export default function Detail(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logofundobranco.png')} style={styles.image}/>
            <Text>Esse sistema é independente de qualquer governo ou instituição.</Text>
            <Text>Software Livre - Licença: MIT</Text>
            <Text
                style={styles.link}    
                onPress={()=>{Linking.openURL('https://github.com/barretorodrigo/CoronaSaoPaulo')}}
            >https://github.com/barretorodrigo/CoronaSaoPaulo</Text>
        </View>
    )
}