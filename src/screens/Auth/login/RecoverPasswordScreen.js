import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import BackgroundSvg from "../../../components/Background";
import { WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import CodeInputs from "../../../components/CodeInputs";
import { DismissKeyboard } from "../../../components/DismissKeyboard";

export default function RecoverPasswordScreen({ navigation }) {

    const [code, setCode] = useState('')
    useEffect(() => {
        if (code.length === 6) {
            console.log(code);
        }
    }, [code])
    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <BackgroundSvg Svg={WelcomeBackground} />
                <ScrollView>
                    <Text style={styles.resetPassword}>Восстановление пароля</Text>
                    <Text style={styles.smallText}>Мы отправили 6-ти значный код на ваш номер телефона для подтверждения личности</Text>
                    <CodeInputs value={code} setValue={setCode} />
                    <TouchableOpacity style={styles.sendCode}>
                        <Text style={styles.sendCodeText}>Отправить код повторно</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 40 }}>
                        <Button text={'Подтвердить'} onPress={() => navigation.navigate('NewPasswordScreen')} />
                    </View>
                </ScrollView>
            </SafeAreaView >
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: 'transparent',
        // paddingHorizontal: 30,
        backgroundColor: '#17171f',
    },
    resetPassword: {
        fontSize: 36,
        marginTop: 45,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        // alignSelf: 'flex-start',
    },
    smallText: {
        paddingHorizontal: 30,
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

