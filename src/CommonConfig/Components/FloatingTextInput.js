import React from 'react'
import { View, Image, I18nManager } from 'react-native'
import { Fonts, Colors, Scale, ImagesPath } from '..'
var FloatingLabel = require('react-native-floating-labels');

const FloatingTextInput = ({ onChangeText, onFocus, onBlur, secureTextEntry, labelImage, label, value, isSelected, style }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: Scale(20), ...style }}>
            <View style={{ width: '13%', justifyContent: 'center', paddingTop: Scale(20) }}>
                <Image source={labelImage} resizeMode={'contain'} style={{ tintColor: isSelected ? Colors.APPCOLOR1 : Colors.GRAY, height: Scale(22), width: Scale(22) }} />
            </View>
            <FloatingLabel
                autoCapitalize='none'
                onBlur={onBlur}
                onFocus={onFocus}
                secureTextEntry={secureTextEntry ? secureTextEntry : false}
                inputStyle={{ borderWidth: 0, paddingLeft: 0, fontSize: Scale(15), fontFamily: Fonts.bold, color: Colors.MATEBLACK }}
                labelStyle={{ fontFamily: Fonts.regular, fontSize: Scale(15), paddingLeft: 0, color: Colors.GRAY }}
                style={{ textAlign: I18nManager.isRTL ? 'right' : 'left', borderBottomWidth: 0.6, width: '85%', borderColor: isSelected ? Colors.APPCOLOR1 : Colors.LIGHT_GRAY, }}
                onChangeText={onChangeText}
                value={value}
            >{label}</FloatingLabel>
        </View>
    )
}
export default FloatingTextInput