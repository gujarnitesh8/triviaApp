// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, Image, TextInput, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
export const InputType = ({ question, onChangeText }) => {
    console.log(question,"questionquestion")
    return (
        <View>
            <Text style={styles.questionTitleText}>{question.title}</Text>
            <View style={styles.textInputBox}>
                <TextInput
                    placeholder={'Enter your name'}
                    value={question.value}
                    onChangeText={onChangeText}
                    style={styles.textInputStyle} />
            </View>
        </View>
    )
}