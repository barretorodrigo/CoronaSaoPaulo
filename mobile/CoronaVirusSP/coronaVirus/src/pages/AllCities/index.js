import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableHighlight} from  'react-native';
import { DataTable, ActivityIndicator} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/Header';
import styles from './style';
import api from '../../services/api';

export default function AllCities(){

    const [allCities, setAllCities] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadingAllCitiesDatas(){
        setLoading(true)
        const response = (await api.get('/allbycities',{}));
        setLoading(false)
        setAllCities(response.data);
    }

    function sortByCity(){
        setAllCities(
            allCities.sort((a,b)=>{
                return a.total_cases-b.total_cases;
            })
        );
        console.log(allCities);
    }

    function sortByCases(){
        setAllCities(
            allCities.sort((a,b)=>{
                return b.total_cases-a.total_cases;
            })
        );
        console.log(allCities);
    }

    useEffect(()=>{
        loadingAllCitiesDatas();
        sortByCases();
        sortByCity();
    }, [])

    return(
        <View style={styles.container}>
            <Header/>
            {loading ? <ActivityIndicator style={styles.spinner} color="#9F000F" size="large"/> :
            <ScrollView style={styles.scrollView}>
                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>
                        <Text style={styles.headerText} onPress={()=>sortByCity()}>Cidade</Text>
                        <AntDesign name="caretdown" size={14} color="#797979" />
                    </DataTable.Title>
                    <DataTable.Title numeric>
                        <Text style={styles.headerText} onPress={()=>sortByCases()}>Casos</Text>
                        <AntDesign name="caretdown" size={14} color="#797979" />
                    </DataTable.Title>
                    <DataTable.Title numeric>
                        <Text style={styles.headerText}>Óbitos</Text>
                        <AntDesign name="caretdown" size={14} color="#797979" />
                    </DataTable.Title>
                    </DataTable.Header>

                    {allCities
                    // .sort((a,b)=>{
                    //     return b.total_cases-a.total_cases;
                    // })
                    .map((item, key)=>(
                        <DataTable.Row key={key}>{console.log(item.city)}
                            <DataTable.Cell>{item.city}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.total_cases}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.total_deaths}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>
            }
        </View> 
    )
}