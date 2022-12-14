// Армения + 374 00000000 
// Беларусь +375 000000000
// Россия +7 0000000000
// Украина +380 0000000000

import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { WhiteArrowDown } from "../assets/svgs/AuthSvgs";

const countries = [
    {
        contryCode: 374,
        flag: require('../assets/pngs/flags/FlagArmenia.png')
    },
    {
        countryCode: 7,
        flag: require('../assets/pngs/flags/FlagRussia.png',)
    },
]

export default function PhoneInput({ value, onChange, countryCode, setCountryCode, text}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log(countryCode);
    }, [countryCode])

    function formatAMNumber(value) {
        let x = value
            .replace(/\D/g, '')
            .match(/(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/);
        let formattedNumber = !x[1] ? '' : x[1] + (!x[2] ? '' : '  ' + x[2]) + (!x[3] ? '' : ' - ' + x[3]) + (!x[4] ? '' : ' - ' + x[4])
        onChange(formattedNumber)
    }
    function formatRUNumber(value) {
        let x = value
            .replace(/\D/g, '')
            .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        let phone = !x[1] ? '' : !x[2] ? '(' + x[1] : '(' + x[1] + ') ' + x[2] +
            (x[3] ? ' - ' + x[3] : '') +
            (x[4] ? ' - ' + x[4] : '') +
            (x[5] ? ' - ' + x[5] : '')
        onChange(phone)
    }

    return <>
        <View style={styles.labelContainer}>
        {/* Старый тел. номер */}
            <Text style={styles.label}>{text}</Text>
        </View>
        <View style={[styles.inputContainer, isVisible && { borderBottomLeftRadius: 0 }]}>
            <TouchableOpacity style={[styles.phoneCodeContainer]} onPress={() => setIsVisible(!isVisible)}>
                <Image style={{ width: 25, height: 25, }} source={countryCode == '374' ? countries[0].flag : countries[1].flag} />
                <Text style={styles.countryCode}>+{countryCode}</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={countryCode === '374' ? formatAMNumber : formatRUNumber}
                keyboardType={'numeric'}
                cursorColor={'white'}
                maxLength={countryCode === '374' ? 16 : 19}
            />
        </View>
        {isVisible && <TouchableOpacity style={styles.openedDropDown} onPress={() => {
            setIsVisible(false)
            setCountryCode(countryCode == '7' ? '374' : '7')
            onChange('')
        }}>
            <Image style={{ width: 25, height: 25 }} source={countryCode == '7' ? countries[0].flag : countries[1].flag} />
            <Text style={styles.countryCode}>+{countryCode == '7' ? '374' : '7'}</Text>
        </TouchableOpacity>
        }
    </>
}

const styles = StyleSheet.create({
    input: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 15,
        width: '77%'
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
    phoneCodeContainer: {
        height: 55,
        width: 80,
        borderRightWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
    },
    openedDropDown: {
        height: 40,
        width: 81,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: 'white',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
    },
    countryCode: {
        color: 'white',
        fontSize: 16,
        width: '55%',
        textAlign: 'center'
    },
})



