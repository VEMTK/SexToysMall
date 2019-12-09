import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';

/**
 * 限时抢购
 * @param {*} param0 
 */
const FlashSaleComponent = ({ adData }) => {

    const [hour, setHour] = useState("08");
    const [min, setMin] = useState(59);
    const [second, setSecond] = useState(59);

    let interval = null;

    useEffect(() => {
        function startCountDown() {
            interval = setInterval(() => {
                if (second === 0) {
                    setSecond(59);
                    setMin(min - 1);
                } else {
                    setSecond(second - 1);
                }
            }, 1000);
        }
        queryData();
        startCountDown();
        return function cleanup() {
            clearInterval(interval);
        }

    }, [second]);

    function queryData() {

    }

    return (
        <LoadingPageComponent style={styles.container} loading={false}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.headInfo}>
                        <View style={styles.headTitle}>
                            <Text style={styles.headTitleText}>限时抢购</Text>
                        </View>
                        <View style={styles.countDown}><Text>{hour}:{min}:{second < 10 ? "0" + second : second}</Text></View>
                    </View>
                    <View style={styles.more}>
                        <Text>更多></Text>
                    </View>
                </View>
                {/** 限时抢购产品 */}
                <ScrollView style={{ marginTop: 3 }} horizontal={true}>
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                    <FlashSaleItemComponent />
                </ScrollView>
            </View>
        </LoadingPageComponent>
    );
};

const FlashSaleItemComponent = () => {
    return (
        <View style={styles.flashSaleItem}>
            <View style={{ flex: 0.7, backgroundColor: "#FFD39B" }}>
                <Text>Image</Text>
            </View>
            <View style={{ flex: 0.3, backgroundColor: "#8B7355" }}>
                <Text>123</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        flex: 1,
        flexDirection: "column",
        height: 175,
        backgroundColor: "#FFFFF0",
    },
    head: {
        height: 32,
        minHeight: 32,
        maxHeight: 32,
        flex: 1,
        flexDirection: "row",
    },
    headInfo: {
        flex: 0.6,
        backgroundColor: "#FFFACD",
        alignItems: "center",
        flexDirection: "row",
    },
    headTitle: {
        flex: 0.5,
        height: "100%",
        justifyContent: "center",
        backgroundColor: "red",
        borderTopEndRadius: 32,
        borderBottomEndRadius: 32
    },
    headTitleText: {
        marginLeft: 6,
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    countDown: {
        marginLeft: 15
    },
    more: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 6,
        backgroundColor: "#FFFACD",
    },
    flashSaleItem: {
        marginStart: 2,
        height: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        width: 110,
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#98F5FF"
    }
});

export default FlashSaleComponent;
