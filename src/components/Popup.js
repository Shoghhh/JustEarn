import React, { Fragment } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { PopupBackground } from "../assets/svgs/AuthSvgs";

export default function Popup({ isVisible, text, text2, Background }) {
    return isVisible && <Fragment>
        <BlurView style={styles.blurView} blurType="light" />
        <View style={styles.popupContainer}>
            <Background />
            <Text style={styles.text}>{text}</Text>
            {text2 && <Text style={styles.text2}>{text2}</Text>}
        </View>
    </Fragment>
}

const styles = StyleSheet.create({
    blurView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 99999999,
    },
    popupContainer: {
        position: 'absolute',
        top: 170,
        backgroundColor: '#17171F',
        borderRadius: 10,
        width: 300,
        zIndex: 999999999,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    text: {
        paddingHorizontal: 20,
        color: 'white',
        fontSize: 22,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        marginBottom: 10
    },
    text2: {
        fontSize: 30,
        color: '#C40B83',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    }
});
