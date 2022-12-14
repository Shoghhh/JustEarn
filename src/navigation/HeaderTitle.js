
import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { BackIconWhite, BackIconPurple } from '../assets/svgs/AuthSvgs';

export default function HeaderTitle({ title, navigation, left, white, fontSize }) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={[title && { width: windowWidth }]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', zIndex: 999999 }}>
                {white ? <BackIconWhite /> : <BackIconPurple />}
            </TouchableOpacity>
            {title &&
                <Text style={[{
                    fontSize: 24,
                    fontWeight: '400',
                    marginRight: 20,
                    textAlign: 'center',
                    fontFamily: 'Montserrat-Bold'
                }, left && { fontSize: 20, textAlign: 'left', marginLeft: 40 }, white ? { color: 'white' } : { color: '#1C1C1E' }, fontSize && { fontSize: fontSize }]}>{title}</Text>}
        </View>
    );
}
