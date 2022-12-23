import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Dollar, Euro } from "../assets/svgs/AuthSvgs";

export default function Role({ role, Image, currency, onPress }) {
    return (
        <LinearGradient colors={['#521280', '#C40B83']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientContainer}
        >
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={[{ position: 'absolute', top: 0 }, currency === 'dollar' ? {left: 0} : {right: 0}]}>
                    {currency === 'dollar' ? <Dollar /> : <Euro />}
                </View>
                <Image />
                <Text style={styles.btnText}>{role}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    gradientContainer: {
        marginBottom: 20,
        width: '45%',
        height: 250,
        alignSelf: 'center',
        borderRadius: 8,
        opacity: 0.8,
    },
    btnText: {
        marginTop: 30,
        fontSize: 20,
         color: 'white',
        fontFamily: 'Montserrat-Bold',
    },
})
