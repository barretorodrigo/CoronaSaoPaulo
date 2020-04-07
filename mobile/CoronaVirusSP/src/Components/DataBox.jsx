import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from  'react-native';
import DataBoxStyle from './DataBoxStyle';

export default function DataBox(props){
    return(
        <View style={DataBoxStyle.box}>
            <Text style={DataBoxStyle.value}>{props.value}</Text>
            <Text style={DataBoxStyle.text}>{props.name}</Text>
        </View>
    )
}