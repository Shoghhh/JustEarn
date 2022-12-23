import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import OrdersScreen from '../screens/Home/OrdersScreen';
import { SupportIcon, HomeIcon, MyOrdersIcon, NotificationsIcon, ProfileIcon } from '../assets/svgs/NavigationMenuSvgs';
import OrdersNavigator from './OrdersNavigation';

const Tab = createBottomTabNavigator();

export default function NavigationMenu() {
  const tabBarStyle = {
    backgroundColor: '#17171F',
    height: '9%',
    borderTopWidth: 0.2,
  };
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: tabBarStyle,
      })}>
      <Tab.Screen
        name="MyOrders"
        component={OrdersNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <MyOrdersIcon focused={focused} />,
        })}
      />
      <Tab.Screen
        name="Chat"
        component={OrdersNavigator}
        options={(route) => ({
          tabBarIcon: ({ focused }) => <SupportIcon focused={focused} />,
        })}
      />
      <Tab.Screen
        name="Home"
        component={OrdersNavigator}
        options={(route) => ({
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => <NotificationsIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrdersNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        })}
      />
    </Tab.Navigator>
  );
}
