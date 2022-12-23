import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import Header from "../../navigation/Header";
import CustomerInfo from "./CustomerInfo";
import OrderInfo from "./OrderInfo";
import SubmitReport from "./SubmitReport";

export default function OrderSinglePage({ navigation }) {

    return <SafeAreaView style={styles.container}>
        <Header headertitle={'STECH'} navigation={navigation} />
        <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }} style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
            <CustomerInfo />
            <OrderInfo />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 5 }}>
                <Text style={styles.categoryText}>Категория:</Text>
                <View style={styles.categoryContainer}>
                    <Text style={styles.category}>Приложения</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Кстати,  сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выв</Text>
                <Text style={styles.descriptionText}>Кстати,  сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Приятно, граждане, наблюдать, как ключевые особенности структуры проекта могут быть ассоциативно распределены по отраслям. Вот вам яркий пример современных тенденций — выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании распределения внутренних резервов и ресурсов. Имеется спорная точка зрения, гласящая примерно.</Text>
            </View>
            <SubmitReport />
            <Button text={'Отправить отчёт'} />
        </ScrollView>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17171F',
    },
    descriptionContainer: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#C40B83',
        padding: 10,
        marginBottom: 20,
        flex: 1,
    },
    descriptionText: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
    },
    categoryText: {
        fontSize: 15,
        color: '#8b0f62',
        fontFamily: 'Montserrat-Regular',
    },
    categoryContainer: {
        backgroundColor: '#C40B83',
        alignItems: 'center',
        width: 120,
        height: 27,
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: 10
    },
    category: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold'
    },
});
