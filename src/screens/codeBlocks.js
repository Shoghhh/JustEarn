import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import BackgroundSvg from "../../../components/Background";
import { WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import LinearGradient from "react-native-linear-gradient";
import { Blurhash } from 'react-native-blurhash';

export default function codeBlocks({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            {/* profile screen header */}
            {/* <View style={{ backgroundColor: '#6e1151', height: 210, width: '100%', zIndex: 99999, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
                <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#FFFFFF50', borderRadius: 10, height: 80, position: 'relative', zIndex: 99999, top: 180, flexDirection: 'row' }}>
                    <Image source={require('../../../assets/pngs/ProfileImage.png')} style={{ zIndex: 99999, height: 100, width: 100, position: 'relative', top: -40, left: 15 }} />
                    <LinearGradient colors={['#C40B83', '#521280']} style={{ paddingVertical: 5, width: 45, alignItems: 'center', borderRadius: 5, position: 'absolute', top: -55, left: 95, zIndex: 9999999, }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 15 }}>PRO</Text>
                    </LinearGradient>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '65%', alignItems: 'center' }}>
                        <Text style={{ position: 'absolute', marginLeft: 20, bottom: 85, color: 'white', fontFamily: 'Montserrat-Regular' }}>Истикает 12.08.22</Text>
                        <View style={{ marginLeft: 30, }}>
                            <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 20 }}>Баланс</Text>
                            <Text style={{ color: '#C40B83', fontFamily: 'Montserrat-Bold', fontSize: 22, marginTop: 5 }}>1200 руб.</Text>
                        </View>
                        <LinearGradient colors={['#521280', '#C40B83']}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={{ alignItems: 'center', borderRadius: 8, zIndex: 9999999 }}>
                            <TouchableOpacity style={{ width: 35, height: 35, }}>
                                <Text style={{ color: 'white', fontSize: 38, alignSelf: 'center', position: 'absolute', top: -10 }}>+</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View> */}
            {/* <Blurhash
                blurhash="LF8_%ca{fQfQ|PfQfQfQsWjufQjt"
                style={{ height: 75, width: '80%', borderRadius: 10, alignSelf: 'center',  }}
            /> */}
            {/* Ad profile screen */}
            {/* 
            <LinearGradient
                colors={['#EC6F66', '#F3A183']}
                // colors={['#4ADEDE', '#797EF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1.2 }}
                style={{ borderRadius: 8, marginTop: 20, padding: 15 }}  >
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontSize: 24, fontFamily: 'Montserrat-SemiBold' }}>Тариф PRO</Text>
                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 20 }}>100 руб/мес</Text>
                </View>
                <Text style={{ fontSize: 14, marginTop: 5, width: 260, color: 'black', fontFamily: 'Montserrat-Medium' }}>Получите возможность создания безлимитного количества заказов в течении месяца </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Montserrat-Medium' }}>с тарифом <Text style={{ color: 'white', fontFamily: 'Montserrat-SemiBold' }} >PRO</Text></Text>
                    <LinearGradient colors={['black', '#ffffff00']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1.2 }}
                        style={{ borderRadius: 8, paddingVertical: 10, width: 120, alignItems: 'center' }} >
                        <TouchableOpacity style={{ width: "100%", }}>
                            <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 18, textAlign: 'center' }}>Купить</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient > 
        */}
        </SafeAreaView >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 100,
        // paddingHorizontal: 30,
        backgroundColor: 'transparent',
        backgroundColor: '#17171f',
        marginRight: 70
    },
    resetPassword: {
        fontSize: 36,
        marginTop: 45,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        // alignSelf: 'flex-start',
        // textAlign: ''
    },
    smallText: {
        fontSize: 13,
        marginTop: 20,
        marginBottom: 40,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
    },
    sendCode: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    sendCodeText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
    }
})

