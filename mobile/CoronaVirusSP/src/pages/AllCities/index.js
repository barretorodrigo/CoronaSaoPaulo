import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from  'react-native';
import { DataTable } from 'react-native-paper';
import Header from '../../Components/Header';
import styles from './style';
import api from '../../services/api';

export default function AllCities(){

    const [allCities, setAllCities] = useState([]);

    async function loadingAllCitiesDatas(){
        const response = (await api.get('/allbycities',{}));
        setAllCities(response.data);
    }

    useEffect(()=>{
        loadingAllCitiesDatas();
    }, [])

    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView style={styles.scrollView}>
                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>Cidade</DataTable.Title>
                    <DataTable.Title numeric>Casos</DataTable.Title>
                    <DataTable.Title numeric>Óbitos</DataTable.Title>
                    </DataTable.Header>

                    {allCities
                    .sort((a,b)=>{
                        return b.total_cases-a.total_cases;
                    })
                    .map((item, key)=>(
                        <DataTable.Row key={key}>
                        <DataTable.Cell>{item.city}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.total_cases}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.total_deaths}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>
        </View> 
    )
}