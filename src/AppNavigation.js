import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splashscreen from './Screens/Splashscreen';
import QuizScreen from './Screens/QuizScreen';
import ResultScreen from './Screens/ResultScreen';
import HistoryScreen from './Screens/HistoryScreen';

//--------->>>>> STACKS FOR CUSTOMER TAB <<<<<------------
const Stack = createStackNavigator();

{/* ====>>>>>  STACK NAVIGATOR  <<<<<<<=====*/ }
export default function AppNavigation() {
    return (
        <NavigationContainer>
            {/* ====>>>>>  Common user stack  <<<<<<<=====*/}
            <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={Splashscreen} options={{ headerStyle: { height: 0 }, headerTitle: '', headerLeft: () => <View />, headerRight: () => <View /> }} />                
                <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ headerStyle: { height: 0 }, headerTitle: '', headerLeft: () => <View />, headerRight: () => <View /> }} />                
                <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerStyle: { height: 0 }, headerTitle: '', headerLeft: () => <View />, headerRight: () => <View /> }} />                
                <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerStyle: { height: 0 }, headerTitle: '', headerLeft: () => <View />, headerRight: () => <View /> }} />                
            </Stack.Navigator>
        </NavigationContainer>
    );
}