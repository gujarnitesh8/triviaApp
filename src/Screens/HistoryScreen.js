// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import { } from '../Redux/Actions';
import { ImagesPath, Colors, ENGLISH, HINDI, GUJRATI, LANGUAGE_CODE, FIRST_LAUNCH, LOAD_LOOKUPS, LOAD_PROPERTIES, ApplicationStyles, Scale } from '../CommonConfig';
import { styles } from './styles';
// =============== CLASS DECLARATION ===============
class HistoryScreen extends React.Component {
    state = {
        quizAttemptsArr: [],
        name: ""
    }
    // =============== LIFECYCLE METHODS ===============
    async componentDidMount() {
        AsyncStorage.getItem("quizAttempts").then(data => {
            let quizAttemptsArr = JSON.parse(data)
            console.log(quizAttemptsArr, "quizAttemptsArr")
            this.setState({ quizAttemptsArr: quizAttemptsArr })
        })
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
    renderItem = ({ item, index }) => {
        return (
            <View style={styles.cardStyle}>
                <Text style={styles.gameTextStyle}>{'Game : ' + Number(index + 1)}</Text>
                <Text style={styles.dateTextStyle}>{'Date : ' + moment(item.date).format('Do MMMM YYYY, h:mm a')}</Text>
                <FlatList
                    data={item.questions}
                    renderItem={(subItem) => {
                        if (subItem.item.questionId == 1) {
                            return (
                                <View style={[styles.questionAnsContainer, { flexDirection: 'row' }]}>
                                    <Text style={styles.dateTextStyle}>{'Name : '}</Text>
                                    <Text style={styles.ansTextStyle}>{subItem.item.value}</Text>
                                </View>
                            )
                        } else {
                            return (
                                <View style={styles.questionAnsContainer}>
                                    <Text style={styles.dateTextStyle}>{subItem.item.title}</Text>
                                    <Text style={styles.ansTextStyle}>Answer : {typeof (subItem.item.value) == 'object' ? this.generateCommaSaparate(subItem.item.value) : subItem.item.value}</Text>
                                </View>
                            )
                        }
                    }}
                />
            </View>
        )
    }
    // =============== RENDER METHOD ===============
    render() {
        return (
            <View style={styles.historyScreenContainer}>
                <View style={styles.historyHeaderContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.backButtonStyle}>
                        <Text style={styles.backButtonTextStyle}>{'Back'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.backButtonTextStyle}>{'History'}</Text>
                    <View style={styles.emptyContainer} />
                </View>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.quizAttemptsArr}
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderItem.bind(this)}
                    />
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
export default connect(mapStateToProps, null)(HistoryScreen);