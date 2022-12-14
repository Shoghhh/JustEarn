import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Input({ value, onChange, inputType, label, secure, phone }) {
    const [isVisible, setIsVisible] = useState(false);

    return <>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, { width: secure ? '90%' : '100%' }]}
                value={value}
                onChangeText={onChange}
                keyboardType={inputType}
                cursorColor={'white'}
                secureTextEntry={!isVisible && secure}
            />
            {(secure && value) && <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Image style={{ width: 30, height: 30 }} source={!isVisible ? require('../assets/pngs/closedEye.png') : require('../assets/pngs/openedEye.png')} />
            </TouchableOpacity>}
        </View>
    </>
}

const styles = StyleSheet.create({
    input: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 15,
    },
    label: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        backgroundColor: '#17171f',
        zIndex: 1,
        paddingHorizontal: 5,
    },
    inputContainer: {
        height: 55,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelContainer: {
        alignItems: 'baseline',
        position: 'relative',
        top: 10,
        left: 10,
        zIndex: 1,
    },
})