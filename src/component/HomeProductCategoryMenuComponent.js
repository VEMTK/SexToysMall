import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


/**
 * 首页菜单
 */
const HomeProductCategoryMenuComponent = () => {
    return (
        <View style={styles.menuContent}>
            <View style={styles.homeMenu}>
                {/** 动态渲染菜单 */}
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
                <HomeProductCategoryMenuItemComponent />
            </View>
        </View>
    );
};

const HomeProductCategoryMenuItemComponent = ({ item }) => {
    return (
        <TouchableOpacity style={styles.homeMenuItem}>
            <Image source={require('../asset/img/qqg.png')} style={{ width: 33, height: 33 }}></Image>
            <Text style={{ color: "#838B8B", marginTop: 5, fontSize: 11 }}>我是菜单</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    menuContent: {
        flex: 1,
        alignItems: "center",
    },
    homeMenu: {
        height: 145,
        padding: 2,
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    homeMenuItem: {
        margin: 2,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '17%',
        height: 63,
        minWidth: '17%',
        maxWidth: '17.9%',
    }
});

export default HomeProductCategoryMenuComponent
