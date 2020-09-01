// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, Image, TextInput, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Colors } from '../../CommonConfig';
export const Radio = ({ question, onSelectOption }) => {
    return (
        <View>
            <Text style={styles.questionTitleText}>{question.title}</Text>
            {question.options.map(element => {
                return (
                    <TouchableOpacity activeOpacity={1} onPress={() => onSelectOption(element)} style={[styles.radioBox, { borderWidth: 3, backgroundColor: question.value == element ? Colors.WHITE : Colors.APPCOLOR, borderColor: question.value == element ? Colors.WHITE : Colors.WHITE }]}>
                        <Text style={[styles.radioText, { color: question.value == element ? Colors.APPCOLOR : Colors.WHITE }]}>{element}</Text>
                    </TouchableOpacity>
                )
            })}
        </View >
    )
}