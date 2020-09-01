// Libraries
import React from 'react';
import { StyleSheet, I18nManager } from 'react-native';

// Assets
// assets
import {
    screenWidth,
    screenHeight,
    ImagesPath,
    Colors,
    Fonts,
    Scale,
} from '../CommonConfig';

export const styles = StyleSheet.create({

    //--------->>>>>> SPLASH SCREEN <<<<<-----------
    splashScreenContainer: { flex: 1, backgroundColor: Colors.BLACK, justifyContent: 'center', alignItems: 'center' },
    splashIconStyle: { height: Scale(130), width: Scale(130) },

    //--------->>>>>> QUIZE SCREEN <<<<<-----------
    quizeScreenContainer: { flex: 1, backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'center' },
    questionBoxStyle: { borderRadius: Scale(15), paddingVertical: Scale(15), paddingHorizontal: Scale(15), backgroundColor: Colors.APPCOLOR, width: '90%' },
    buttonsContainer: { flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' },
    buttonStyle: { width: screenWidth / 2.5, height: Scale(50), borderRadius: Scale(10), justifyContent: 'center', alignItems: 'center', marginTop: Scale(25), backgroundColor: Colors.APPCOLOR },
    buttonTextStyle: { fontSize: Scale(20), fontWeight: '600', color: Colors.WHITE, textAlign: 'center' },
    questionTitleText: { fontSize: Scale(20), fontWeight: '600', color: Colors.WHITE, textAlign: 'center' },
    textInputBox: { width: '95%', alignSelf: 'center', marginVertical: Scale(15), borderRadius: Scale(10), height: Scale(50), backgroundColor: Colors.WHITE },
    textInputStyle: { height: Scale(50), width: '100%', marginHorizontal: Scale(10), fontSize: Scale(18) },
    radioBox: { width: '95%', alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: Scale(15), marginVertical: Scale(5), borderRadius: Scale(10), height: Scale(40), backgroundColor: Colors.WHITE },
    radioText: { fontSize: Scale(16), fontWeight: '600', color: Colors.GRAY, textAlign: 'center' },

    //--------->>>>>> HISTORY SCREEN <<<<<-----------
    historyScreenContainer: { flex: 1, backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'center' },
    historyHeaderContainer: { height: Scale(65), backgroundColor: Colors.BLACK, justifyContent: 'space-between', paddingHorizontal: Scale(10), flexDirection: 'row', paddingBottom: Scale(10), alignItems: 'center', width: '100%' },
    backButtonStyle: { paddingVertical: Scale(3), paddingHorizontal: Scale(10), borderRadius: Scale(5), backgroundColor: Colors.APPCOLOR, justifyContent: 'center', alignItems: 'center' },
    backButtonTextStyle: { color: Colors.WHITE, fontSize: Scale(20) },
    emptyContainer: { flex: 0.3 },
    flatlistContainer: { justifyContent: 'center', flex: 1, width: '90%' },
    cardStyle: { padding: Scale(10), marginVertical: Scale(15), borderRadius: Scale(5), backgroundColor: Colors.EXTRA_LIGHT, marginTop: Scale(10) },
    gameTextStyle: { color: Colors.MATEBLACK, fontWeight: '600', fontSize: Scale(18) },
    dateTextStyle: { color: Colors.MATEBLACK, fontSize: Scale(18) },
    questionAnsContainer: { marginTop: Scale(10) },
    ansTextStyle: { color: Colors.GRAY, fontSize: Scale(18) },


    //--------->>>>>> RESUILT SCREEN <<<<<-----------
    resultScreenContainer: { flex: 1, backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'center' },
    answerCardContainer: { justifyContent: 'center', width: '90%' },
    h3TextStyle: { color: Colors.MATEBLACK, fontSize: Scale(18) },
    queAnsStyle: { marginTop: Scale(10) },
    answerTextStyle: { color: Colors.GRAY, fontSize: Scale(18) },
    
});
