// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, Image, TextInput, ImageBackground, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { } from '../Redux/Actions';
import { ImagesPath, Colors, ENGLISH, HINDI, GUJRATI, LANGUAGE_CODE, FIRST_LAUNCH, LOAD_LOOKUPS, LOAD_PROPERTIES, ApplicationStyles, Scale, screenWidth } from '../CommonConfig';
import { styles } from './styles';
import { InputType } from './components/InputType';
import { Radio } from './components/Radio';
import { Checkbox } from './components/Checkbox';
const questionJson = require('../Assets/questions.json')
// =============== CLASS DECLARATION ===============
class QuizeScreen extends React.Component {
    state = {
        isLoadingNext: false,
        isLoadingSubmit: false,
        questionsList: [
            {
                "questionId": 1,
                "title": "What is your name?",
                "questionType": "TextInput",
                "options": []
            },
            {
                "questionId": 2,
                "title": "Who is the best cricketer in the world?",
                "questionType": "Radio",
                "options": [
                    "Sachin Tendulkar",
                    "Virat Kohli",
                    "Adan Gilchrist",
                    "Jacques Kalis"
                ]
            },
            {
                "questionId": 3,
                "title": "What are the colors in the Indian national flag? ",
                "questionType": "Checkbox",
                "options": [
                    "White",
                    "Yellow",
                    "Orange",
                    "Green"
                ]
            }
        ],
        activeIndex: 0,
        activeQuestion: {
            "questionId": 1,
            "title": "What is your name?",
            "questionType": "TextInput",
            "options": []
        },
    }
    // =============== LIFECYCLE METHODS ===============
    async componentDidMount() {
        let questionStringfy = JSON.stringify(questionJson)
        // this.setState({ questionsList: JSON.parse(questionStringfy), activeQuestion: questionJson[0] })
    }
    setRootTo(screen, params) {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: screen, params: params }
                ],
            })
        );
    }
    onPrev() {
        this.setState({ activeQuestion: this.state.questionsList[this.state.activeIndex - 1], activeIndex: this.state.activeIndex - 1 })
    }
    onNext() {
        if (!this.state.isLoadingNext) {
            this.setState({ isLoadingNext: true })
            setTimeout(() => {
                this.state.questionsList[this.state.activeIndex] = this.state.activeQuestion
                this.setState({ activeQuestion: this.state.questionsList[this.state.activeIndex + 1], activeIndex: this.state.activeIndex + 1, isLoadingNext: false })
            }, 500);
        }
    }
    onSubmit() {
        if (!this.state.isLoadingSubmit) {
            this.setState({ isLoadingSubmit: true })
            setTimeout(() => {
                this.setRootTo("ResultScreen", { questionsWithAnsList: this.state.questionsList })
                this.setState({ isLoadingSubmit: false })
                AsyncStorage.getItem("quizAttempts").then(data => {
                    let attemptes = JSON.parse(data)
                    console.log(attemptes, "datadata")
                    if (attemptes != null) {
                        let quizObj = {
                            date: new Date(),
                            questions: this.state.questionsList
                        };
                        attemptes.push(quizObj)
                        AsyncStorage.setItem("quizAttempts", JSON.stringify(attemptes))
                    } else {
                        attemptes = []
                        let quizObj = {
                            date: new Date(),
                            questions: this.state.questionsList
                        };
                        attemptes.push(quizObj)
                        AsyncStorage.setItem("quizAttempts", JSON.stringify(attemptes))
                    }
                })
            }, 500);
        }
    }
    onChangeText(text) {
        console.log(text, "texttexttext")
        this.state.activeQuestion['value'] = text
        this.setState({ activeQuestion: this.state.activeQuestion })
    }
    onSelectRadioOption(option) {
        this.state.activeQuestion['value'] = option
        this.setState({ activeQuestion: this.state.activeQuestion })
    }
    onSelectCheckboxOption(option) {
        if (this.state.activeQuestion['value'] && this.state.activeQuestion['value'].includes(option)) {
            this.state.activeQuestion['value'].splice(this.state.activeQuestion['value'].indexOf(option), 1)
        } else {
            if (this.state.activeQuestion['value']) {
                this.state.activeQuestion['value'].push(option)
            } else {
                this.state.activeQuestion['value'] = []
                this.state.activeQuestion['value'].push(option)
            }
        }
        this.setState({ activeQuestion: this.state.activeQuestion })
    }
    // =============== RENDER METHOD ===============
    render() {
        return (
            <View style={styles.quizeScreenContainer}>
                <View style={styles.questionBoxStyle}>
                    {this.state.activeQuestion.questionType == 'TextInput' && <InputType question={this.state.activeQuestion} onChangeText={this.onChangeText.bind(this)} />}
                    {this.state.activeQuestion.questionType == 'Radio' && <Radio question={this.state.activeQuestion} onSelectOption={this.onSelectRadioOption.bind(this)} />}
                    {this.state.activeQuestion.questionType == 'Checkbox' && <Checkbox question={this.state.activeQuestion} onSelectCheckboxOption={this.onSelectCheckboxOption.bind(this)} />}
                </View>
                <View style={styles.buttonsContainer}>

                    {/* =====>>>>>>> THIS IS PREV BUTTON IN CASE NEEDED TO DISPLAY THE PREVIOUS QUESTION WE CAN USE (COMMENTED IT BECAUSE IT WAS NOT MENTIONS IN REQUIREMENTS <<<<<<<========= */}

                    {/* {this.state.activeIndex != 0 &&
                        <TouchableOpacity onPress={this.onPrev.bind(this)} activeOpacity={1} style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Prev</Text>
                        </TouchableOpacity>
                    } */}
                    {this.state.activeQuestion.value && this.state.activeQuestion.value != '' && this.state.activeIndex != this.state.questionsList.length - 1 &&
                        <TouchableOpacity onPress={this.onNext.bind(this)} activeOpacity={1} style={styles.buttonStyle}>
                            {this.state.isLoadingNext ? <ActivityIndicator color={Colors.WHITE} /> : <Text style={styles.buttonTextStyle}>Next</Text>}
                        </TouchableOpacity>
                    }
                    {this.state.activeQuestion.value && this.state.activeQuestion.value != '' && this.state.activeIndex != 0 && this.state.activeIndex == this.state.questionsList.length - 1 &&
                        <TouchableOpacity onPress={this.onSubmit.bind(this)} activeOpacity={1} style={styles.buttonStyle}>
                            {this.state.isLoadingSubmit ? <ActivityIndicator color={Colors.WHITE} /> : <Text style={styles.buttonTextStyle}>Submit</Text>}
                        </TouchableOpacity>
                    }
                </View>
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
export default connect(mapStateToProps, null)(QuizeScreen);