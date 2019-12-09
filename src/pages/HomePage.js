import React, { useEffect, useState } from 'react';
import { View, ScrollView, Modal, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import PromotionalScreenComponent from '../component/PromotionalScreenComponent';
import HomeProductCategoryMenuComponent from '../component/HomeProductCategoryMenuComponent';
import AdComponent from '../component/AdComponent';
import FlashSaleComponent from '../component/FlashSaleComponent';
import PromotionMenuCollectionComponent from '../component/PromotionMenuCollectionComponent';
import ProducSubRecomComponent from '../component/ProducSubRecomComponent';

import ToastExample from './ToastExample';

const HomePage = ({ navigation }) => {

    const [myVisible, setMyVisible] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        //测试调用原生Android的代码
        ToastExample.show("AAAAAAAAAAAAAA",ToastExample.SHORT);
    }, []);

    const data1 = {
        title: "五一大放价",
        imageUri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572092877911&di=109ade49eda7ca5512f95f0be3be46e7&imgtype=0&src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F150412%2F1-1504122004420-L.jpg"
    }

    function setVisibleFalse() {
        setMyVisible(false);
    }

    //显示搜索栏
    let _showHeader = false;//防止性能问题
    function onScroll(event) {
        const y = event.nativeEvent.contentOffset.y;
        if (y <= 100 && _showHeader) {
            _showHeader = false;
            setShowHeader(false);
        } else if (y > 300 && !_showHeader) {
            _showHeader = true;
            setShowHeader(true);
        }
    }

    function onScreenClick(data) {
        navigation.navigate('ProductListPage');
    }



    return (
        <>
            <ScrollView onScroll={onScroll}>
                {/**大屏幻灯片 */}
                <PromotionalScreenComponent onScreenClick={onScreenClick} />
                {/**类型菜单导航 */}
                <HomeProductCategoryMenuComponent />
                {/**Home页中第一个广告位 */}
                <AdComponent />
                {/**限时抢购 */}
                <FlashSaleComponent />
                {/**优惠菜单集合 */}
                <PromotionMenuCollectionComponent />
                {/**专题推荐集合开始 */}
                <ProducSubRecomComponent data={data1} />
                <ProducSubRecomComponent data={data1} />
                <ProducSubRecomComponent data={data1} />
                <ProducSubRecomComponent data={data1} />
                {/**专题推荐集合结束 */}
            </ScrollView>

            {/** 搜索栏开始 */}
            {

                showHeader ? (
                    <View style={styles.searchHeader}>
                        <Text style={{}}>我是搜索栏</Text>
                    </View>) : <></>

            }
            {/** 搜索栏结束 */}

            <Modal visible={myVisible} transparent={true}>
                <View style={{ backgroundColor: "blue", height: 200, width: "50%", position: "absolute", start: "25%", top: "40%", }}>
                    <Text>这是一个弹出框.</Text>
                    <TouchableOpacity onPress={setVisibleFalse}>
                        <Text>关闭</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    searchHeader: {
        width: "100%",
        position: "absolute",
        top: 0,
        height: 35,
        backgroundColor: "red",
    },
    itemText: {
    }
});

export default HomePage;
