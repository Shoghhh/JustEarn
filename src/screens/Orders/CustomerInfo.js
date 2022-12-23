import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { GreenArrowUp, RedArrowDown } from "../../assets/svgs/OrdersSvgs";

export default function CustomerInfo() {
    return <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/pngs/ProfileImage.png')} />
        <View>
            <Text style={styles.name}>Клава Смирнова</Text>
            <View style={styles.reviewsContainer}>
                <Text style={styles.reviewsText}>Отзывы фрилансеров</Text>
                <View style={styles.reviews}>
                    <Text style={[styles.reviewNmmber, {color: '#2FB600'}]}>+4</Text>
                    <GreenArrowUp />
                </View>
                <View style={styles.reviews}>
                    <Text style={[styles.reviewNmmber,  {color: '#EC0A0A'}]}>-2</Text>
                    <RedArrowDown />
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 70,
        marginRight: 10
    },
    name: {
        color: '#C40B83',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 7
    },
    reviewsContainer: {
        flexDirection: 'row',
        alignItems : 'center'
    },
    reviewsText: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        marginRight: 10,
    },
    reviews: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
        backgroundColor: '#252525',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    },
    reviewNmmber:{
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold',
        marginRight: 3
    }
})