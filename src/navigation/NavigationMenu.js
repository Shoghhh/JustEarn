import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function NavigationMenu() {
  const tabBarStyle = {
    position: 'absolute',
    bottom: 25,
    left: 10,
    right: 10,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    height: 53,
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: tabBarStyle,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ route }) => ({
          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <View style={{ marginLeft: 20 }}>
          //       <TabBarIcon
          //         focused={focused}
          //         Icon={HomeIcon}
          //         width={70}
          //         text={'Главная'}
          //       />
          //     </View>
          //   );
          // },
          tabBarStyle: tabBarStyle
        })}
      />
      <Tab.Screen
        name="Analizes"
        component={AnalysisStackNavigation}
        options={(route) => ({
          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <TabBarIcon
          //       focused={focused}
          //       Icon={AnalizesIcon}
          //       width={90}
          //       text={'Анализы и услуги'}
          //     />
          //   );
          // },
          tabBarStyle: tabBarStyle
        })}
      />
      <Tab.Screen
        name="chat"
        component={OnlainChat}
        options={{
          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <TabBarIcon
          //       focused={focused}
          //       Icon={ChatIcon}
          //       width={70}
          //       text={'Онлайн чат'}
          //     />
          //   );
          // },
        }}
      />
      <Tab.Screen
        name="more"
        component={MoreNavigator}
        options={({ route }) => ({
          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <View style={{ marginRight: 40 }}>
          //       <TabBarIcon
          //         focused={focused}
          //         Icon={MoreIcon}
          //         width={50}
          //         text={'Еще'}
          //       />
          //     </View>
          //   );
          // },
          tabBarStyle: tabBarStyle
        })}
      />
    </Tab.Navigator>
  );
}
