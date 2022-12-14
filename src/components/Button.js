import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function Button({ text, fill, onPress }) {
    return (
        <LinearGradient colors={['#521280', '#C40B83']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientContainer}
        >
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
    },
    gradientContainer: {
        marginBottom: 20,
        width: 265,
        alignSelf: 'center',
        borderRadius: 8
    },
    btnText: {
        fontSize: 18,
        // fontWeight: '500',
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
    },
})
