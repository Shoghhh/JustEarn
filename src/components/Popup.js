import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { PopupBackground } from "../assets/svgs/AuthSvgs";

export default function Popup({ isVisible, text }) {
    return isVisible && <>
        <BlurView style={styles.blurView} blurType="dark" />
        <View style={styles.popupContainer}>
            <PopupBackground />
            <Text style={styles.text}>{text}</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    blurView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1
    },
    popupContainer: {
        position: 'absolute',
        top: 170,
        backgroundColor: '#17171F',
        borderRadius: 10,
        height: 400,
        width: 300,
        zIndex: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        marginBottom: 80,
        color: 'white',
        fontSize: 22,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
    },
});
