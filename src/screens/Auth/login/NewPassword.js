import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import BackgroundSvg from "../../../components/Background";
import Input from "../../../components/Input";
import { PopupBackground, WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import { DismissKeyboard } from "../../../components/DismissKeyboard";
import Popup from "../../../components/Popup";
export default function NewPasswordScreen({ navigation }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isVisible, setIsVisible] = useState(false);

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
                    <Text style={styles.resetPassword}>Задайте новый пароль</Text>
                    <Text style={styles.smallText}>Придумайте сложный пароль,содержащий строчные и прописные буквы,а так же цифры и символы</Text>
                    <Input value={newPassword} onChange={setNewPassword} inputType={'default'} label={'Новый пароль'} secure />
                    <Input value={confirmPass} onChange={setConfirmPass} inputType={'default'} label={'Повторите новый пароль'} secure />
                    <View style={{ marginTop: 60 }}>
                        <Button text={'Подтвердить'} onPress={onPress} />
                    </View>
                </ScrollView>
                <Popup isVisible={isVisible}  Background={PopupBackground} text={'Ваш пароль успешно изменён'} />
            </SafeAreaView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 25,
        backgroundColor: 'transparent',
        backgroundColor: '#17171f',
    },
    resetPassword: {
        fontSize: 36,
        marginTop: 45,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center'
    },
    smallText: {
        fontSize: 13,
        marginTop: 20,
        marginBottom: 40,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
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

