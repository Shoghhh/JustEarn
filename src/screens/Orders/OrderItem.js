import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { EyeIcon } from "../../assets/svgs/OrdersSvgs";
import SmallButton from "../../components/SmallButton";

export default function OrderItem({ title, views, time, price, text, onPress }) {
    return <LinearGradient
        colors={['#321646', '#C40B83']}
        start={{ x: 0, y: 0 }}
        end={{ x: 3, y: -0.5 }}
        style={styles.container}
    >
        <View style={{ padding: 15 }} >
            <View style={styles.nameViewTimeContainer}>
                <View style={styles.nameView}>
                    <Text style={styles.name}>{title}</Text>
                    <View style={styles.viewsContainer}>
                        <EyeIcon />
                        <Text style={styles.views}>{views}</Text>
                    </View>
                </View>
                <Text style={styles.time}>{time} мин</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.price}>{price}<Text style={{ fontSize: 20 }}> руб.</Text></Text>
                <SmallButton text={'Подробнее'} color={'purple'} onPress={onPress}/>
            </View>
        </View>
    </LinearGradient>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 10
    },
    nameViewTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        marginRight: 10
    },
    viewsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    views: {
        color: 'white',
        fontSize: 16,
        marginLeft: 4
    },
    time: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
    },
    text: {
        color: 'white',
        marginBottom: 13,
        fontFamily: 'Montserrat-Regular',
    },
    price: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',

    }

})