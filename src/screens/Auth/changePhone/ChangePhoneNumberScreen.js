import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import BackgroundSvg from "../../../components/Background";
import Input from "../../../components/Input";
import { WelcomeBackground } from "../../../assets/svgs/AuthSvgs";
import Button from "../../../components/Button";
import { DismissKeyboard } from "../../../components/DismissKeyboard";
import PhoneInput from "../../../components/PhoneInput";

export default function ChangePhoneNumberScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('374');

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <BackgroundSvg Svg={WelcomeBackground} />
                <Text style={styles.resetPassword}>Изменение номер телефона</Text>
                <Text style={styles.smallText}>Чтобы изменить номер телефонa введите старый номер.</Text>
                {/* <Input value={phoneNumber} onChange={setPhoneNumber} inputType={'numeric'} label={'Старый тел. номер'} /> */}
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} countryCode={countryCode} setCountryCode={setCountryCode} text={'Старый тел. номер'}/>

                <View style={{ marginTop: 60 }}>
                    <Button text={'Далее'} onPress={() => navigation.navigate('NewPhoneNumberScreen')} />
                </View>
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
        // alignItems: 'center'
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

