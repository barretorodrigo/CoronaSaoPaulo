import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from './pages/Detail';
import AllDatas from './pages/AllDatas';
import AllCities from './pages/AllCities';
import Map from './pages/Map';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="AllDatas" component={AllDatas} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="AllCities" component={AllCities} />
                <AppStack.Screen name="Map" component={Map} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}