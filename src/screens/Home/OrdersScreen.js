import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "../../navigation/Header";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import OrderItem from "../Orders/OrderItem";
import Popup from "../../components/Popup";
import { PopupBackgroumdGift } from "../../assets/svgs/AuthSvgs";



const data = [
    { title: 'STECH', views: '210', time: '10', price: '10', text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют...' },
    { title: 'Refectio', views: '180', time: '12', price: '20', text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют...', },
    { title: 'Мой Гид', views: '210', time: '14', price: '20', text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют...' },
    { title: 'STECH', views: '210', time: '10', price: '10', text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют...' },
    { title: 'Refectio', views: '180', time: '12', price: '20', text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют...' },
    { title: 'Мой Гид', views: '210', time: '14', price: '20', text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют...' },
];


export default function OrdersScreen({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowPopup(false)
        }, 2000);
    }, [])

    return <SafeAreaView style={styles.container}>
        <Header sortBy headertitle={'Заказы'} />
        <ScrollView horizontal style={{ marginBottom: 10 }} showsHorizontalScrollIndicator={false}>
            <SegmentedControlTab
                values={['Приложения', 'Игры', 'Заведения', 'фывва']}
                selectedIndex={selectedIndex}
                tabsContainerStyle={styles.tabsContainerStyle}
                tabStyle={styles.tabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                onTabPress={setSelectedIndex}
            />
        </ScrollView>
        <ScrollView indicatorStyle='white' showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15 }} >
            {data.map((item, i) => <OrderItem key={i} title={item.title} views={item.views} time={item.time} price={item.price} text={item.text} onPress={() => navigation.navigate('OrderSinglePage')} />)}
        </ScrollView>
        <Popup isVisible={showPopup} setIsVisible={setShowPopup} close Background={PopupBackgroumdGift} text={'Вы получили подарок за регистрацию в размере'} text2={'100 Драм'} />

    </SafeAreaView>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17171F',
    },
    tabsContainerStyle: {
        marginTop: 20,
        borderRadius: 5,
        marginBottom: 30,
        marginLeft: 17
    },
    tabStyle: {
        backgroundColor: '#a78fa6',
        borderWidth: 0,
        borderEndWidth: 0,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 15
    },
    tabTextStyle: {
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: '#17171F',
    },
    activeTabStyle: {
        backgroundColor: '#C40B83',
    },
    activeTabTextStyle: {
        color: 'white',
    },

});
