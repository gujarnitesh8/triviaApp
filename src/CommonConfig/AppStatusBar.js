// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import Colors from './Colors';

// =============== COMPONENT DECLARATION ===============
const AppStatusBar = ({ height }) => {
    return (
        <View style={{ backgroundColor: Colors.BLACK, height: Platform.OS == 'ios' ? height : 0 }}>
            <StatusBar backgroundColor={Colors.BLACK} barStyle={'light-content'} />
        </View>
    )
}
export default AppStatusBar