// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, Image, TextInput, ImageBackground, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { } from '../Redux/Actions';
import { ImagesPath, Colors, ENGLISH, HINDI, GUJRATI, LANGUAGE_CODE, FIRST_LAUNCH, LOAD_LOOKUPS, LOAD_PROPERTIES, ApplicationStyles, Scale } from '../CommonConfig';
import { styles } from './styles'
// =============== CLASS DECLARATION ===============
class Splashscreen extends React.Component {
    state = {
    }
    // =============== LIFECYCLE METHODS ===============
    async componentDidMount() {
        this.setRootTo('QuizScreen')
    }
    setRootTo(screen) {
        setTimeout(() => {
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: screen }
                    ],
                })
            );
        }, 3000);
    }
    // =============== RENDER METHOD ===============
    render() {
        return (
            <View style={styles.splashScreenContainer}>
                <Image source={ImagesPath.Splash} resizeMode={'contain'} style={styles.splashIconStyle} />
            </View>
        )
    }
}
// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = (res) => {
    return {
        Auth: res.AuthReducer,
        CommonReducer: res.CommonReducer
    };
}
export default connect(mapStateToProps, null)(Splashscreen);