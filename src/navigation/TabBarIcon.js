import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default function TabBarIcon({ focused, Icon, width, text }) {
  return  <View style={[styles.nonActiveTabBarStyle, { width: width }]}>
    <Icon />
    <Text style={styles.nonActiveTabTitle}>{text}</Text>
  </View>
}

const styles = StyleSheet.create({
  activeTabBarStyle: {
    alignItems: 'center',
    borderRadius: 15,
    height: 53,
  },
  nonActiveTabBarStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 53,
  },
  activeTabTitle: {
    color: 'white',
    fontSize: 10,
  },
  nonActiveTabTitle: {
    color: '#72777A',
    fontSize: 10,
  },
});
