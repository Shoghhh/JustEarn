import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from '../screens/Auth/WelcomePage';
import RolesScreen from '../screens/Auth/register/RolesScreen';
import LoginScreen from '../screens/Auth/login/LoginScreen';
import HeaderTitle from '../navigation/HeaderTitle';
import ForgotPasswordScreen from '../screens/Auth/login/ForgotPasswordScreen';
import RecoverPasswordScreen from '../screens/Auth/login/RecoverPasswordScreen';
import NewPasswordScreen from '../screens/Auth/login/NewPassword';
import RegisterScreen from '../screens/Auth/register/RegisterScreen';
import PhoneConfirmationScreen from '../screens/Auth/register/PhoneConfirmationScreen';
import ChangePhoneNumberScreen from '../screens/Auth/changePhone/ChangePhoneNumberScreen';
import NewPhoneNumberScreen from '../screens/Auth/changePhone/NewPhoneNumberScreen';
import NewPhoneConfirmationScreen from '../screens/Auth/changePhone/NewPhoneConfirmationScreen';
import ChangePasswordScreen from '../screens/Auth/changePassword/ChangePasswordScreen';
import NavigationMenu from './NavigationMenu';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ initialRouteName }) => {
    // useEffect(() => {
    //     console.log(initialRouteName);
    // }, [initialRouteName]);
    return (
        <NavigationContainer>
            <StatusBar
                hidden={false}
                translucent={true}
                backgroundColor={'transparent'}
            // barStyle="dark-content"
            />
            <Stack.Navigator
                initialRouteName={'WelcomePage'}
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                })}>
                <Stack.Screen
                    name="WelcomePage"
                    component={WelcomePage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="RolesScreen"
                    component={RolesScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="ForgotPasswordScreen"
                    component={ForgotPasswordScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="RecoverPasswordScreen"
                    component={RecoverPasswordScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="NewPasswordScreen"
                    component={NewPasswordScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="PhoneConfirmationScreen"
                    component={PhoneConfirmationScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="ChangePhoneNumberScreen"
                    component={ChangePhoneNumberScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="NewPhoneNumberScreen"
                    component={NewPhoneNumberScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="NewPhoneConfirmationScreen"
                    component={NewPhoneConfirmationScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="ChangePasswordScreen"
                    component={ChangePasswordScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <HeaderTitle navigation={navigation} title={' '} white />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Menu"
                    component={NavigationMenu}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
