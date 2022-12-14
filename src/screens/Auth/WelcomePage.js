import React from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { JustEarn, WelcomeBackground } from "../../assets/svgs/AuthSvgs";
import BackgroundSvg from "../../components/Background";
import Background from "../../components/Background";
import Button from "../../components/Button";


export default function WelcomePage({ navigation }) {
    return <SafeAreaView style={styles.container}>
        <BackgroundSvg Svg={WelcomeBackground}/>
        <Image source={require('../../assets/pngs/JustEarn.png')} style={{width: 155, height: 123}}/>
        <Text style={styles.welcomeText}>Добро пожаловать</Text>
        <Text style={styles.smallText}>Регистрирутесь или зайдите в уже существующий аккаунт</Text>
        <View style={styles.buttonsContainer}>
            <Button text={'Войти'} onPress={() => navigation.navigate('LoginScreen')}/>
            <Button text={'Зарегистрироваться'} onPress={() => navigation.navigate('RolesScreen')} />
            <Button text={'Тел. номер'} onPress={() => navigation.navigate('ChangePhoneNumberScreen')} />
            <Button text={'Изменение пароля'} onPress={() => navigation.navigate('ChangePasswordScreen')} />
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 180,
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: '#17171f'
    },
    welcomeText: {
        fontSize: 30,
        marginTop: 45,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
    },
    smallText: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
    },
    buttonsContainer: {
        marginTop: 20,
        width: '100%',
    },
})

