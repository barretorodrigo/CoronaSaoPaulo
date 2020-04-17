import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import Header from '../../Components/Header';
import styles from './style';

export default function Map(){
    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
}