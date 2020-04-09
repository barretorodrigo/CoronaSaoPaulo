import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {Entypo} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Dimensions, ScrollView, TouchableOpacity} from  'react-native';
import styles from './style';
import DataBox from '../../Components/DataBox';
import {
    LineChart
  } from "react-native-chart-kit";

export default function AllDatas(){
    const navigation = useNavigation();
    const [datas, setDatas] = useState([{day:1}]);
    const [obits, setObits] = useState([0]);
    const [cases, setCases] = useState([0]);
    const [days, setDays] = useState([0]);
    const [lastUpdate, setLastUpdate] = useState('');
    const [dates, setDates] = useState(['01 Jan']);
    const [totalCases, setTotalCases] = useState(0);
    const [totalObits, setTotalObits] = useState(0);
    const [last24Case, setLast24Case] = useState(0);
    const [data, setData] = useState({labels: dates,
    datasets: [
        {
        data: obits,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        }
    ],});

    const screenWidth = Dimensions.get("window").width;

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    async function loadingDatas(){
        let sumTotalObits = 0;
        const response = await api.get('/all',{
        });
        setDatas([...datas, ...response.data]);
        setCases([]);
        setDates([]);
        await response.data.forEach((item)=>{
            cases.push(parseInt(item.total));
            dates.push(item.date);
            obits.push(parseInt(item.obits));
            sumTotalObits += parseInt(item.obits);
        });
        setTotalObits(sumTotalObits);
        setLast24Case(response.data.pop().day);
        setDays(dates.length);
        setTotalCases(cases.pop());
        setData({
            //labels: dates,            
            datasets: [
                {
                data: cases,
                color: (opacity = 1) => `rgba(159, 0, 15)`, // optional
                strokeWidth: 2 // optional
                }
            ],
        } );
    }

    async function loadingLastUpdate(){
        const response = await api.get('/update',{});
        setLastUpdate(response.data);
    }

    useEffect(()=>{
        loadingDatas();
        loadingLastUpdate()
    }, [])

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        
      };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Estado de São Paulo</Text>
                    <Text style={styles.headerSubText}>Última atualização em: {lastUpdate.lastUpdate} </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{navigateToDetail()}}>
                        <Entypo name="dots-three-vertical" size={16} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.scroll}>
                    <View style={styles.boxes}>
                        <DataBox value={totalCases} name="Total de Casos"/>
                        <DataBox value={last24Case} name="Últimas 24h"/>
                    </View>
                    <View style={styles.boxes}>
                        <DataBox value={days} name="Dias"/>
                        <DataBox value={totalObits} name="Óbitos"/>
                    </View>
                    <View style={styles.boxes}>
                        <DataBox value='44,04 mi.' name="População"/>
                        <DataBox value={(100*totalObits/totalCases).toFixed(2)} name="Taxa de óbito"/>
                    </View>
                    <Text style={styles.info}>*Fonte: Secretaria de Saúde do Estado de São Paulo</Text>
                    <View style={styles.chart}>
                        <LineChart
                            data={data}
                            withDots={false}
                            width={screenWidth}
                            height={256}
                            verticalLabelRotation={30}
                            chartConfig={chartConfig}
                            withInnerLines={false}
                            bezier
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}