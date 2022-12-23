import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const colors = {
    purple: ['#C40B83', '#521280'],
    black: ['#313131', '#1b1b1b'],
    white: ['white', 'white']
}

export default function SmallButton({ text, color, onPress }) {
    return (
        <LinearGradient colors={colors[color]}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.2 }}
            style={styles.gradientContainer}
        >
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
        // <LinearGradient colors={['black', '#ffffff00']}
        //     start={{ x: 0, y: 0 }}
        //     end={{ x: 0, y: 1.2 }}
        //     style={{ borderRadius: 8, paddingVertical: 10, width: 120, alignItems: 'center' }} >
        //     <TouchableOpacity style={{ width: "100%", }}>
        //         <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 18, textAlign: 'center' }}>Купить</Text>
        //     </TouchableOpacity>
        // </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 115,
        paddingVertical: 10,
        alignItems: 'center',
    },
    gradientContainer: {
        // marginBottom: 20,
        width: 115,
        alignSelf: 'center',
        borderRadius: 8
    },
    btnText: {
        fontSize: 15,
        // fontWeight: '500',
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
})
