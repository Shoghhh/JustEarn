import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GradientLine, PurpleEye, PurpleMoney, PurpleTime } from "../../assets/svgs/OrdersSvgs";


export default function OrderInfo() {
    return <View style={styles.container}>
        <View style={styles.blockContainer}>
            <Text style={styles.blockName}>Стоимость задачи</Text>
            <View style={styles.flex}>
                <PurpleMoney />
                <Text style={styles.spo}>15 руб.</Text>
            </View>
        </View>
        <GradientLine />
        <View style={styles.blockContainer}>
            <Text style={styles.blockName}>Просмотры</Text>
            <View style={styles.flex}>
                <PurpleEye />
                <Text style={styles.spo}>210</Text>
            </View>
        </View>
        <GradientLine />
        <View style={styles.blockContainer}>
            <Text style={styles.blockName}>Стоимость задачи</Text>
            <View style={styles.flex}>
                <PurpleTime />
                <Text style={styles.spo}>15 мин.</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    blockContainer: {
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    blockName: {
        color: '#C40B83',
        fontSize: 10,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    spo: {
        fontSize: 20,
        marginLeft: 5,
        fontFamily: 'Montserrat-SemiBold',
        color: 'white'
    }
})