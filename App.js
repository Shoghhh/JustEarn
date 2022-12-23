import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/store/configureStore';
import AppNavigation from './src/navigation/AppNavigation';
import BackgroundSvg from './src/components/Background';
import { SplashBackground, JustEarnBig } from './src/assets/svgs/AuthSvgs';
import { DismissKeyboard } from './src/components/DismissKeyboard';

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000);
  }, [])
  return isLoading ?
    <SafeAreaView style={{ backgroundColor: '#17171f', flex: 1, justifyContent: 'center' }}>
      <BackgroundSvg Svg={SplashBackground} />
      <View style={{ alignSelf: 'center', }}>
        <Image style={{ height: 160, width: 220 }} source={require('./src/assets/pngs/JustEarn.png')} />
      </View>
    </SafeAreaView>
    : <Provider store={store}>
        <AppNavigation />
    </Provider>
};

export default App;