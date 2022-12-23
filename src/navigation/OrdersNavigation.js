import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../screens/Home/OrdersScreen';
import OrderSinglePage from '../screens/Orders/OrderSinglePage';

const Stack = createNativeStackNavigator();
const OrdersNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName={'OrdersScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false
            })}
        >
            <Stack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
            />
            <Stack.Screen
                name="OrderSinglePage"
                component={OrderSinglePage}
            />
        </Stack.Navigator>
    );
};

export default OrdersNavigator;
