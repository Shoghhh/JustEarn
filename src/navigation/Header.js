import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PurpleBackIcon } from "../assets/svgs/NavigationMenuSvgs";
import { PurpleArrowDown } from "../assets/svgs/OrdersSvgs";


export default function Header({ headertitle, sortBy, white, navigation }) {
    return <View style={styles.shadow}>
        <View style={styles.header}>
            {sortBy ? <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.sortBytitle}>{headertitle}</Text>
                <TouchableOpacity style={styles.sortBy}>
                    <Text style={styles.sortByText}>Сортировать по</Text>
                    <PurpleArrowDown />
                </TouchableOpacity>
            </View> : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ zIndex: 1 }} onPress={() => navigation.goBack()}>
                    <PurpleBackIcon />
                </TouchableOpacity>
                <Text style={styles.title}>{headertitle}</Text>
            </View>}
        </View>
    </View>
}

const styles = StyleSheet.create({
    shadow: {
        overflow: 'hidden',
        backgroundColor: '#17171F',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        shadowColor: 'white',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 5,
        shadowRadius: 15,
        width: '100%',
        elevation: 6,
    },
    header: {
        zIndex: 999999,
        backgroundColor: '#17171F',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginTop: 30,
        padding: 20,
    },
    sortBy: {
        flexDirection: "row",
        alignItems: 'center'
    },
    sortByText: {
        color: '#C40B83',
        fontFamily: 'Montserrat-SemiBold',
        marginRight: 3
    },
    sortBytitle: {
        color: '#C40B83',
        fontSize: 27,
        fontFamily: 'Montserrat-SemiBold'
    },
    title: {
        color: '#C40B83',
        fontSize: 27,
        fontFamily: 'Montserrat-Bold',
        position: 'absolute',
        width: '100%',
        textAlign: 'center'
    }

})