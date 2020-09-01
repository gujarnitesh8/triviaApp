// =============== IMPORTS AND LIBRARIES ===============
import React from 'react';
import { View, Text, Image, TextInput, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Colors } from '../../CommonConfig';
export const Checkbox = ({ question, onSelectCheckboxOption }) => {
    return (
        <View>
            <Text style={styles.questionTitleText}>{question.title}</Text>
            {question.options.map(element => {
                return (
                    <TouchableOpacity activeOpacity={1} onPress={() => onSelectCheckboxOption(element)} style={[styles.radioBox, { borderWidth: 3, backgroundColor: question.value && question.value.includes(element) ? Colors.WHITE : Colors.APPCOLOR, borderColor: question.value && question.value.includes(element) ? Colors.WHITE : Colors.WHITE }]}>
                        <Text style={[styles.radioText, { color: question.value && question.value.includes(element) ? Colors.APPCOLOR : Colors.WHITE }]}>{element}</Text>
                    </TouchableOpacity>
                )
            })}
        </View >
    )
}