import React from "react";
import { SafeAreaView, View } from "react-native";

export default function BackgroundSvg({ Svg }) {
    return <SafeAreaView style={{ position: 'absolute', right: 0, top: 40 }}>
        <Svg />
    </SafeAreaView>
}