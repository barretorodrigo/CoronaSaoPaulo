import React, {useState, useEffect} from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View } from 'react-native';
import Header from '../../Components/Header';
import styles from './style';

export default function Map(){
    return(
        <View style={styles.container}>
            <Header/>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: -23.5489,
                    longitude: -46.6388,
                    latitudeDelta: 7,
                    longitudeDelta: 7,
                }}
                >
            </MapView>
        </View>
    )
}