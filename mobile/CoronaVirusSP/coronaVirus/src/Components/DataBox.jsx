import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from  'react-native';
import DataBoxStyle from './DataBoxStyle';
import NumberFormat from 'react-number-format';

export default function DataBox(props){
    return(
        <View style={DataBoxStyle.box}>
            <NumberFormat 
                value={parseFloat(props.value)} 
                decimalSeparator="," 
                displayType={'text'} 
                renderText={value => <Text style={DataBoxStyle.value}>{value} {props.sufix}</Text>} />
            <Text style={DataBoxStyle.text}>{props.name}</Text>
        </View>
    )
}