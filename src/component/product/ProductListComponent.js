import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Modal, RefreshControl, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import LoadingPageComponent from '../LoadingPageComponent';

import ModalDropdown from 'react-native-modal-dropdown';


const testData = {
    typeId: 1, dataList: [
        {
            id: 1, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 2, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 3, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 4, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/tfscom/i8/TB1rxzib5wIL1JjSZFsYXIXFFXa_M2.SS2_460x460xz.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 5, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: false, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 6, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 7, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
        {
            id: 8, title: '雅迪科 珍稀天然植物 滋养持久延时喷剂 10ml', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg', hot: true, price: 198, priceUnit: '￥', freeShipping: true, salesVolume: 149829, commentNumber: 2311
        },
    ]
}




/**
 * 产品列表组件
 */
const ProductListComponent = ({ data }) => {
    //if (data && data.dataList && data.dataList.length > 0) {
    return (
        <>
            <ProductListFilterHeardComponent />
            <ProductFilterWord />
            <ProductListView
                data={testData.dataList}

            />
        </>
    );
    // } else {
    //     return (<><Text>无数据</Text></>)
    // }
};


const TestDropDownMenu = ({ visible, onClose }) => {

    if (visible) {
        return (
            <View style={{ position: "absolute", top: 35, height: "100%", left: 0, width: "100%", zIndex: 999, }}>
                <View style={{ width: "100%", height: 150, backgroundColor: "white" }}>
                    <ScrollView>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                        <Text>1231111111111111111111111</Text>
                    </ScrollView>
                </View>

                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={{ flex: 1, opacity: 0.6, backgroundColor: "gray" }} ></View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    return (<></>);
}


/**
 * 列表顶部导航
 */
const ProductListFilterHeardComponent = ({
    onSellWellClick,
    onOrderBySellClick,
    onOrderByPriceClick,
    onNewProductClick,
    OnChangeLayout }) => {

    const [popVisible, setVisible] = useState(false);

    return (
        <>
            <View style={styles.filterHeadView}>
                <TouchableOpacity onPress={() => {
                    setVisible(!popVisible);
                }}>
                    <Text style={styles.filterHeadViewItem}>综合</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.filterHeadViewItem}>销量</Text>
                </View>
                <View>
                    <Text style={styles.filterHeadViewItem}>价格</Text>
                </View>
                <View>
                    <Text style={styles.filterHeadViewItem}>新品</Text>
                </View>
                <View>
                    <Text style={styles.filterHeadViewItem}>视图</Text>
                </View>
            </View>

            <TestDropDownMenu visible={popVisible} onClose={() => {
                setVisible(!popVisible);
            }}></TestDropDownMenu>

        </>
    );
}

/**
 * 推荐的相关专题
 */
const ProductFilterWord = ({ data }) => {
    return (
        <View style={{alignItems:"center"}}>
            <View style={styles.filterWordView}>
                <View style={styles.filterWordItem}>
                    <Text style={styles.filterWordItemText}>延时喷剂</Text>
                </View>
                <View style={styles.filterWordItem}>
                    <Text style={styles.filterWordItemText}>情欲提升</Text>
                </View>
                <View style={styles.filterWordItem}>
                    <Text style={styles.filterWordItemText}>情欲提升</Text>
                </View>
                <View style={styles.filterWordItem}>
                    <Text style={styles.filterWordItemText}>情欲提升</Text>
                </View>
            </View>
        </View>
    );
}


/**
 * List 布局Item
 * @param {*} param0 
 */
export const ProductListItemH = ({ item }) => {

    return (
        <View style={{ height: 130, flex: 1, flexDirection: "row", margin: 7 }}>
            <View style={{ width: 130 }}>
                <Image style={{ height: "100%", width: "100%" }} source={{ uri: item.imageUrl }}></Image>
            </View>
            <View style={{ flex: 1, marginStart: 7, flexDirection: "column", borderBottomWidth: 0.3, justifyContent: "space-around" }}>
                <View>
                    <Text>{item.title}{item.hot ? <Text style={{ color: "red" }}>[热卖]</Text> : <></>}</Text>
                </View>
                <View>
                    <Text><Text style={{ fontSize: 15, color: "red", fontWeight: "300" }}>{item.priceUnit}{item.price}</Text> <Text style={{ fontSize: 12, color: "gray" }}>{item.freeShipping ? "包邮" : ""}</Text> </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 11, color: "gray" }}>销量:{item.salesVolume}</Text>
                    <Text style={{ paddingStart: 6, fontSize: 11, color: "gray" }}>评价:{item.commentNumber}</Text>
                </View>
            </View>
        </View>
    )
}

/**
 * Grid 形式布局Item
 */
export const ProductListItemV = ({ item }) => {


}

/**
 * ProductListView
 */
export const ProductListView = ({ data }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => (item.id + '')}
                renderItem={ProductListItemH}
                refreshControl={<RefreshControl refreshing={false}></RefreshControl>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    filterWordView: {
        height: 38,
        padding: 4,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap"
    },
    filterWordItem: {
        margin: 3,
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        width: "23%",
        backgroundColor: "#F5F5F5"
    },
    filterWordItemText: {
        fontSize: 12
    },
    filterHeadView: {
        borderTopColor: "gray",
        borderBottomColor: "gray",
        borderBottomWidth: 0.3,
        flexDirection: "row",
        alignItems: "center",
        height: 35,
        justifyContent: "space-around"
    },
    filterHeadViewItem: {
        color: "gray",
    },
    filterHeadViewItemClick: {
        color: "black",
    },
});

export default ProductListComponent;
