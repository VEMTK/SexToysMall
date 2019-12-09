/**
 * 个人中心
 */
import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';

const PersonalComponent = () => {

    return (
        <ScrollView style={{ backgroundColor: "#CFCFCF", flex: 1 }}>
            <UserInfoComponent></UserInfoComponent>
            <OrderMenuComponent></OrderMenuComponent>
            <SettingComponent></SettingComponent>
        </ScrollView>
    );
}


/**
 * 用户信息
 */
const UserInfoComponent = () => {
    return (
        <View style={{ height: 140, backgroundColor: "black", justifyContent: "space-between" }}>
            <View style={{ height: 100 }}>
                <View style={{ width: "100%", flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flex: 1, flexDirection: "row", marginStart: 10 }}>
                        <Image style={{ width: 42, height: 42 }} source={{ uri: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016991755,1861274664&fm=26&gp=0.jpg" }}></Image>
                        <View style={{ marginStart: 10, justifyContent: "space-around" }}>
                            <Text style={{ color: "#EEAD0E" }}>欢迎您,游客</Text>
                            <View style={{ backgroundColor: "#EEAD0E", borderRadius: 16, width: 50, alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>VIP 7</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#EEAD0E", height: 25, width: 80, marginEnd: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity>
                                <Text>
                                    登录/注册
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: 40, flexDirection: "row", justifyContent: "space-around" }}>
                <View>
                    <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#EEAD0E", fontSize: 12 }}>0</Text>
                        <Text style={{ color: "#EEAD0E", fontSize: 12 }}>收藏</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#EEAD0E", fontSize: 12 }}>3</Text>
                        <Text style={{ color: "#EEAD0E", fontSize: 12 }}>足迹</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}



/**
 * 订单菜单
 */
const OrderMenuComponent = () => {

    return (
        <>
            <View style={{ backgroundColor: "white", width: "100%", height: 80, marginTop: 3 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around", flexDirection: "row" }}>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image style={{ width: 30, height: 30 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            待付款
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image style={{ width: 30, height: 30 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            待发货
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image style={{ width: 30, height: 30 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            待收货
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image style={{ width: 30, height: 30 }} source={require("../asset/img/daifukuan.png")}>
                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            待评价
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image style={{ width: 30, height: 30 }} source={require("../asset/img/daifukuan.png")}></Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            全部订单
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


/**
 * 设置菜单
 */
const SettingComponent = () => {
    return (
        <>
            <View style={{ backgroundColor: "white", width: "100%", height: 165, marginTop: 4 }}>
                <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "flex-start" }}>
                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            积分商城
                        </Text>
                    </View>
                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            优惠券
                        </Text>
                    </View>

                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            VIP客服
                        </Text>
                    </View>

                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            隐私保护
                        </Text>
                    </View>

                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            账户管理
                        </Text>
                    </View>

                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            帮助中心
                        </Text>
                    </View>

                    <View style={{ width: 60, height: 60, alignItems: "center", margin: 11 }}>
                        <Image style={{ width: 40, height: 40 }} source={require("../asset/img/daifukuan.png")}>

                        </Image>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>
                            更多设置
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );

}



export default PersonalComponent;


