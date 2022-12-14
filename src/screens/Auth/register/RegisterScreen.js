import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import BackgroundSvg from "../../../components/Background";
import Input from "../../../components/Input";
import { EmptyFrame, SelectedIcon, WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import { DismissKeyboard } from "../../../components/DismissKeyboard";
import PhoneInput from "../../../components/PhoneInput";

export default function RegisterScreen({ navigation }) {
    const [name, setname] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [countryCode, setCountryCode] = useState('374')
    return (
        <DismissKeyboard >
            <SafeAreaView style={styles.container}>
                <BackgroundSvg Svg={WelcomeBackground} />
                <Text style={styles.loginText}>Регистрация</Text>
                <ScrollView>
                    <Input value={name} onChange={setname} inputType={'default'} label={'Имя'} />
                    <Input value={surname} onChange={setSurname} inputType={'default'} label={'Фамилия'} />
                    <PhoneInput value={phoneNumber} onChange={setPhoneNumber} countryCode={countryCode} setCountryCode={setCountryCode} text={'Номер телефона'}/>
                    <Input value={password} onChange={setPassword} inputType={'default'} label={'Пароль'} secure={true} />
                    <Input value={confirmPassword} onChange={setConfirmPassword} inputType={'default'} label={'Повторите пароль'} secure={true} />
                    <View style={styles.accept}>
                        <TouchableOpacity onPress={() => setIsSelected(!isSelected)} style={{ marginRight: 10 }}>
                            {!isSelected ? <EmptyFrame /> : <SelectedIcon />}
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1 }}>
                            <Text style={styles.acceptText}> Согласен с правилами
                                <Text style={[styles.acceptText, { color: '#C40B83' }]} onPress={() => console.log('бренда')}> бренда </Text>
                                и
                                <Text style={[styles.acceptText, { color: '#C40B83' }]} onPress={() => console.log('политикой конфиденциальности')}> политикой конфиденциальности</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Button text={'Зарегистрироваться'} onPress={() => navigation.navigate('PhoneConfirmationScreen')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 90,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        backgroundColor: '#17171f'
    },
    loginText: {
        fontSize: 36,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 30
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
    },
    accept: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    acceptText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Montserrat-Regular'
    },
})

