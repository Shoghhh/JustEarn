import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import BackgroundSvg from "../../../components/Background";
import Input from "../../../components/Input";
import { WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import { DismissKeyboard } from "../../../components/DismissKeyboard";
import Popup from "../../../components/Popup";

export default function ChangePasswordScreen({ navigation }) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false)

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
                <Text style={styles.loginText}>Изменение пароля</Text>
                <Input value={oldPassword} onChange={setOldPassword} inputType={'default'} label={'Старый пароль'} secure />
                <Input value={newPassword} onChange={setNewPassword} inputType={'default'} label={'Новый пароль'} secure />
                <Input value={confirmPassword} onChange={setConfirmPassword} inputType={'default'} label={'Повторите новый пароль'} secure />
                <View style={{ marginTop: 80 }}>
                    <Button text={'Изменить'} onPress={onPress} />
                </View>
                <Popup isVisible={isVisible} setIsVisible={setIsVisible} text={'Ваш пароль успешно изменён'} />

            </SafeAreaView>
        </DismissKeyboard>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        backgroundColor: '#17171f'
    },
    loginText: {
        fontSize: 36,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 50,
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

