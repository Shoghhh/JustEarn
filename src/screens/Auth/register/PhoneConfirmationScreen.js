import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import BackgroundSvg from "../../../components/Background";
import { WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import CodeInputs from "../../../components/CodeInputs";
import { DismissKeyboard } from "../../../components/DismissKeyboard";
import Popup from "../../../components/Popup";

export default function PhoneConfirmationScreen({ navigation }) {
    const [code, setCode] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (code.length === 6) {
            console.log(code);
        }
    }, [code])

    function onPress() {
        setIsVisible(true)
        setTimeout(() => {
            navigation.navigate('LoginScreen')
            setIsVisible(false)
        }, 2000);
    }

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <BackgroundSvg Svg={WelcomeBackground} />
                <ScrollView>
                    <Text style={styles.resetPassword}>Подтверждение номер телефона</Text>
                    <Text style={styles.smallText}>Мы отправили 6-ти значный код на ваш номер телефона для подтверждения личности</Text>
                    <CodeInputs value={code} setValue={setCode} />
                    <TouchableOpacity style={styles.sendCode}>
                        <Text style={styles.sendCodeText}>Отправить код повторно</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 40 }}>
                        <Button text={'Подтвердить'} onPress={onPress} />
                    </View>
                </ScrollView>
                <Popup isVisible={isVisible} setIsVisible={setIsVisible} text={'Вы успешно зарегистрировались'} />
            </SafeAreaView >
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: 'transparent',
        backgroundColor: '#17171f',
    },
    resetPassword: {
        fontSize: 36,
        marginTop: 45,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
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

