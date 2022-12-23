import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import BackgroundSvg from "../../../components/Background";
import Input from "../../../components/Input";
import { WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import { DismissKeyboard } from "../../../components/DismissKeyboard";
import PhoneInput from "../../../components/PhoneInput";

export default function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')
    const [countryCode, setCountryCode] = useState('374');

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <BackgroundSvg Svg={WelcomeBackground} />
                <Text style={styles.loginText}>Вход</Text>
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} countryCode={countryCode} setCountryCode={setCountryCode} text={'Номер телефона'} />
                <Input value={password} onChange={setPassword} inputType={'default'} label={'Пароль'} secure />
                <TouchableOpacity style={styles.forgotPass} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={styles.forgotPassText}>Забыли пароль?</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 80 }}>
                    <Button text={'Войти'} onPress={() => navigation.navigate('Menu')} />
                </View>
            </SafeAreaView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 220,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        backgroundColor: '#17171f'
    },
    loginText: {
        fontSize: 36,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 50
    },
    forgotPass: {
        alignSelf: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    forgotPassText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
    }
})

