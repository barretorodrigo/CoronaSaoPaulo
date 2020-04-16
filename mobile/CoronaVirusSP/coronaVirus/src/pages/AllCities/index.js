import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from  'react-native';
import { DataTable, ActivityIndicator} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/Header';
import styles from './style';
import api from '../../services/api';

export default function AllCities(){

    const [allCities, setAllCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("byCases");
    const [wait, setWait] = useState(true);
    let response = [];

    async function loadingAllCitiesDatas(){
        setLoading(true);
        response = (await api.get('/allbycities',{}));
        setAllCities(await sortByCases(response.data));
        setWait(false);
        setLoading(false);
    }

    async function loadingSort(){
        if(sort==="byCity"){
            setLoading(true);
            response = (await sortByCity(allCities));
            setAllCities(response);
            setLoading(false);
        }
        else if(sort==="byCases"){
            setLoading(true);
            response = (await sortByCases(allCities));
            setAllCities(response);
            setLoading(false);
        }
        else if(sort==="byDeaths"){
            setLoading(true);
            response = (await sortByDeaths(allCities));
            setAllCities(response);
            setLoading(false);
        }
    }

    function sortByCity(data){
        return(new Promise((resolve,reject)=>{
            resolve(data.sort((a,b)=>{
                if(a.city<b.city){
                    return -1;
                } 
                else if(a.city>b.city){
                    return 1;
                }
                return 0;
            }));
            reject("error");
        })
            
        );
    }

    function sortByCases(data){
        return(
            data.sort((a,b)=>{
                return b.total_cases-a.total_cases;
            })
        );
    }

    function sortByDeaths(data){
        return(
            data.sort((a,b)=>{
                return b.total_deaths-a.total_deaths;
            })
        );
    }

    useEffect(()=>{
        if(wait){
            loadingAllCitiesDatas();
        }else{
            loadingSort();
        }
    }, [sort])

    return(
        <View style={styles.container}>
            <Header/>
            {loading ? <ActivityIndicator style={styles.spinner} color="#9F000F" size="large"/> :
                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title onPress={()=>setSort("byCity")}>
                        <Text style={styles.headerText}  onPress={()=>setSort("byCity")}>Cidade</Text>
                        <AntDesign name="caretdown" size={14} color="#797979" />
                    </DataTable.Title>
                    <DataTable.Title numeric onPress={()=>setSort("byCases")}>
                        <Text style={styles.headerText} >Casos</Text>
                        <AntDesign name="caretdown" size={14} color="#797979" />
                    </DataTable.Title>
                    <DataTable.Title numeric onPress={()=>setSort("byDeaths")} >
                        <Text style={styles.headerText} >Óbitos</Text>
                        <AntDesign name="caretdown" size={14} color="#797979" />
                    </DataTable.Title>
                    </DataTable.Header>

                    <FlatList
                        data={allCities}
                        onEndReachedThreshold={0.2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={city=>String(city.city)}
                        renderItem={({item})=>
                            <DataTable.Row key={item.city}>
                                <DataTable.Cell>{item.city}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.total_cases}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.total_deaths}</DataTable.Cell>
                            </DataTable.Row>    
                        }
                    />
                </DataTable>
                
            }
        </View> 
    )
}