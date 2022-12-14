import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import Role from "../../../components/RoleComponent";
import { Customer, Freelancer } from "../../../assets/svgs/AuthSvgs";
import BackgroundSvg from "../../../components/Background";
import { RoleBackground } from "../../../assets/svgs/AuthSvgs";

export default function RolesScreen({ navigation }) {
    return <SafeAreaView style={styles.container}>
        <BackgroundSvg Svg={RoleBackground} />
        <Text style={styles.selectRole}>Выбор роли</Text>
        <Text style={styles.smallText}>Выберите пожалуйста роль регистрации аккаунта</Text>
        <View style={styles.rolesContainer}>
            <Role role={'Заказчик'} Image={Customer} currency={'dollar'} onPress={() => navigation.navigate('RegisterScreen')} />
            <Role role={'Фрилансер'} Image={Freelancer} currency={'euro'} onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#17171f'
    },
    selectRole: {
        fontSize: 36,
        marginTop: 45,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
    },
    smallText: {
        fontSize: 17,
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
    },
    rolesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 140,
    }
})

