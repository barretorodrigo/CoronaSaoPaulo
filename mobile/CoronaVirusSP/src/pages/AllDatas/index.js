import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {Text, View, Dimensions, ScrollView} from  'react-native';
import { ActivityIndicator} from 'react-native-paper';
import styles from './style';
import DataBox from '../../Components/DataBox';
import Header from '../../Components/Header';
import {
    LineChart
  } from "react-native-chart-kit";

export default function AllDatas(){
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([{day:1}]);
    const [deaths, setDeaths] = useState([0]);
    const [cases, setCases] = useState([0]);
    const [days, setDays] = useState([0]);
    const [dates, setDates] = useState(['01 Jan']);
    const [totalCases, setTotalCases] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);
    const [last24Case, setLast24Case] = useState(0);
    const [data, setData] = useState({labels: dates,
    datasets: [
        {
        data: deaths,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        }
    ],});

    const screenWidth = Dimensions.get("window").width;

    async function loadingDatas(){
        setLoading(true);
        let sumTotalDeaths = 0;
        const response = await api.get('/all',{
        });
        setDatas([...datas, ...response.data]);
        setCases([]);
        setDates([]);
        await response.data.forEach((item)=>{
            cases.push(parseInt(item.total));
            dates.push(item.date);
            deaths.push(parseInt(item.deaths));
            sumTotalDeaths += parseInt(item.deaths);
        });
        setTotalDeaths(sumTotalDeaths);
        setLast24Case(response.data.pop().day);
        setDays(dates.length);
        setTotalCases(cases.pop());
        setData({
            datasets: [
                {
                data: cases,
                color: (opacity = 1) => `rgba(159, 0, 15)`, // optional
                strokeWidth: 2 // optional
                }
            ],
        } );
        setLoading(false);
    }

    useEffect(()=>{
        loadingDatas();
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
            <Header/>
            {loading ? <ActivityIndicator style={styles.spinner} color="#9F000F"/> :
            <ScrollView>
                <View style={styles.scroll}>
                    <View style={styles.boxes}>
                        <DataBox value={totalCases} name="Total de Casos"/>
                        <DataBox value={last24Case} name="Últimas 24h"/>
                    </View>
                    <View style={styles.boxes}>
                        <DataBox value={days} name="Dias"/>
                        <DataBox value={totalDeaths} name="Óbitos"/>
                    </View>
                    <View style={styles.boxes}>
                        <DataBox value='44.57' name="População" sufix="mi"/>
                        <DataBox value={(100*totalDeaths/totalCases).toFixed(2)} name="Taxa de óbito" sufix="%"/>
                    </View>
                    <Text style={styles.info}>*Fonte: Secretaria de Saúde do Estado de São Paulo e Seade</Text>
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
            }
        </View>
    );
}