import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';


const category = [
    {
        id: '1', label: '热门推荐', icon: '', dataList: {
            title: '热门推荐',
            menuData: [{
                id: '1', label: '延时喷剂', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '2', label: '仿真阳具', imageUrl: 'https://img.alicdn.com/imgextra/i1/2200805419581/O1CN01AoEva52Ke9GZfSgig_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '3', label: '飞机杯', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '4', label: '臀部倒模', imageUrl: 'https://img.alicdn.com/imgextra/i3/3838656702/O1CN01i4O1XN1zNYwGWGAe5_!!3838656702.jpg_430x430q90.jpg'
            }, {
                id: '5', label: '女优名器', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '6', label: 'G点震动棒', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '7', label: '多点按摩棒', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '8', label: '跳蛋', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }, {
                id: '9', label: '情欲提升', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
            }]
        }
    },
    {
        id: '2', label: '男性用品', icon: '', dataList: {
            title: '男性用品',
            menuData: [
                {
                    id: '1', label: '延时喷剂', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '2', label: '仿真阳具', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '3', label: '飞机杯', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '4', label: '臀部倒模', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg'
                }, {
                    id: '5', label: '女优名器', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '6', label: 'G点震动棒', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '7', label: '多点按摩棒', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '8', label: '跳蛋', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }, {
                    id: '9', label: '情欲提升', imageUrl: 'https://img.alicdn.com/imgextra/i4/3838656702/O1CN01oKpVKF1zNZ01BLBTZ_!!0-item_pic.jpg_430x430q90.jpg',
                }
            ]
        }
    },
    { id: '3', label: '女性用品', icon: '', },
    { id: '4', label: '延时助情', icon: '', },
    { id: '5', label: '情趣服饰', icon: '', },
    { id: '6', label: '双人情趣', icon: '', },
    { id: '7', label: '润滑液', icon: '', },
    { id: '8', label: '避孕套', icon: '', }
];


/**
 * 类型菜单组件
 * @param {json} param0 
 */
const CategoryComponent = ({ data }) => {

    const [clickedCategoryItemId, setClickedCategoryItemId] = useState("1");
    const [selectedLabel, setSelectedLabel] = useState(category[0].dataList);

    useEffect(() => {
        function queryData() {

        }
        queryData();
    }, [clickedCategoryItemId]);

    function onCategoryItemClick(data) {
        setClickedCategoryItemId(data.id);
        setSelectedLabel(data.dataList);
    }

    function renderCategoryItem({ item }) {
        return (
            <TouchableOpacity onPress={() => {
                onCategoryItemClick(item);
            }}>
                <View style={item.id === clickedCategoryItemId ? styles.categoryListItemClick : styles.categoryListItem}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={item.id === clickedCategoryItemId ? styles.categoryListItemLableClick : styles.categoryListItemLable}>{item.label}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <LoadingPageComponent style={styles.container} loading={false}>
            <View style={styles.container} >
                <View style={styles.containerRow}>
                    <View style={styles.categoryList}>
                        <FlatList extraData={category} data={category} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} />
                    </View>
                    <View style={styles.categoryProduct}>
                        <CategoryListItem data={selectedLabel}></CategoryListItem>
                    </View>
                </View>
            </View>
        </LoadingPageComponent>
    );
};


/**
 * 
 * @param {json} param0 {title:"热门推荐",dataList:[{id:"",image:"",label:""}]} 
 */
const CategoryListItem = ({ data }) => {

    return (
        <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
            <View style={{ alignItems: "center", height: 30 }}>
                <View style={{ flexDirection: "row", alignItems: "center", alignContent: "space-around" }}>
                    <Text style={{ borderBottomWidth: 1, borderColor: "gray", height: 2, width: 60 }}>12356</Text>
                    <Text style={{ marginStart: 8, marginEnd: 8 }}>{data ? data.title : ""}</Text>
                    <Text style={{ borderBottomWidth: 1, borderColor: "gray", height: 2, width: 60 }}>12356</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", }}>
                    {

                        (data && data.menuData) ? data.menuData.map((item) =>
                            (<CategoryInfoItem key={item.id} data={item}></CategoryInfoItem>)
                        ) : <></>
                    }
                </View>
            </ScrollView>

        </View>);
}


const CategoryInfoItem = ({ data }) => {
    return (
        <TouchableOpacity style={{ width: "27%", maxWidth: "27%", minWidth: "27%", height: 80, flex: 1, justifyContent: "center", alignItems: "center", marginStart: 8, marginTop: 8 }}>
            <View style={{ flex: 0.6 }}>
                <Image style={{ width: 50, height: 50 }} source={{ uri: data.imageUrl }} />
            </View>
            <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, color: "#696969", paddingTop: 6 }}>{data.label}</Text>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: "#B0B0B0",
        marginTop: 35,
    },
    categoryList: {
        width: 105,
        //flex:0.3,
        // backgroundColor: '#F2F3F4',
    },
    categoryListItem: {
        height: 45,
        borderBottomColor: '#B0B0B0',
    },
    categoryListItemClick: {
        height: 45,
        borderBottomWidth: 0.3,
        borderLeftWidth: 5,
        borderLeftColor: '#3498DB',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#B0B0B0',
    },
    categoryListItemLable: {
        fontSize: 12,
        textAlign: 'center',
        color: '#696969',
    },
    categoryListItemLableClick: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
    },
    categoryProduct: {
        flex: 1,

    }

});


export default CategoryComponent;
