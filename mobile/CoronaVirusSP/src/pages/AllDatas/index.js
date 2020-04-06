import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {Text, View, Dimensions} from  'react-native';
import styles from './style';
import {
    LineChart
  } from "react-native-chart-kit";

export default function AllDatas(){
    const [datas, setDatas] = useState([]);
    const [obits, setObits] = useState([0]);
    const [dates, setDates] = useState(['01 Jan']);
    const [data, setData] = useState({labels: dates,
    datasets: [
        {
        data: obits,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        }
    ],});

    const screenWidth = Dimensions.get("window").width;

    let teste;

    async function loadingDatas(){
        const response = await api.get('/all',{

        });
        setDatas([...datas, ...response.data]);
        setObits([]);
        setDates([]);
        await response.data.forEach((item)=>{
            //setObits([...obits, ...item.total]);
            //setDates([...dates, ...item.date]);
            obits.push(parseInt(item.total));
            dates.push(item.date);
            //setDates([...dates, ...item.date]);
        });
        setData({
            //labels: dates,            
            datasets: [
                {
                data: obits,
                color: (opacity = 1) => `rgba(174, 34, 34)`, // optional
                strokeWidth: 2 // optional
                }
            ],
        } );
    }
    useEffect(()=>{
        loadingDatas()
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
            <Text>teste</Text>
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
    );
}