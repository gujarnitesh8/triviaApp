// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { } from '../Redux/Actions';
import { ImagesPath, Colors, ENGLISH, HINDI, GUJRATI, LANGUAGE_CODE, FIRST_LAUNCH, LOAD_LOOKUPS, LOAD_PROPERTIES, ApplicationStyles, Scale } from '../CommonConfig';
import { styles } from './styles';
// =============== CLASS DECLARATION ===============
class ResultScreen extends React.Component {
    state = {
        questionsWithAnsList: this.props.route && this.props.route.params && this.props.route.params.questionsWithAnsList,
        name: ""
    }
    // =============== LIFECYCLE METHODS ===============
    async componentDidMount() {
        this.setState({ name: this.state.questionsWithAnsList[0].value })
    }
    setRootTo(screen) {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: screen }
                ],
            })
        );
    }
    generateCommaSaparate(values) {
        return values.map(item => item).join(', ');
    }
    // =============== RENDER METHOD ===============
    render() {
        return (
            <View style={styles.resultScreenContainer}>
                <View style={styles.answerCardContainer}>
                    <Text style={styles.h3TextStyle}>Hello {this.state.name},</Text>
                    <Text style={styles.h3TextStyle}>Here are the answers selected :</Text>
                    <FlatList
                        extraData={this.state}
                        data={this.state.questionsWithAnsList}
                        renderItem={({ item, index }) => {
                            if (index != 0)
                                return (
                                    <View style={styles.queAnsStyle}>
                                        <Text style={styles.h3TextStyle}>{item.questionId - 1}. {item.title}</Text>
                                        <Text style={styles.answerTextStyle}>Answer : {typeof (item.value) == 'object' ? this.generateCommaSaparate(item.value) : item.value}</Text>
                                    </View>
                                )
                        }}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HistoryScreen')} activeOpacity={1} style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setRootTo('QuizScreen')} activeOpacity={1} style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View >
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
export default connect(mapStateToProps, null)(ResultScreen);