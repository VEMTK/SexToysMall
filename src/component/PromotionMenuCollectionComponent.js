import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';

//优惠菜单集合
const PromotionMenuCollectionComponent = () => {

    useEffect(() => {

        function queryData() {

        }

        queryData();

    }, []);

    return (
        <LoadingPageComponent style={styles.container} loading={false}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: "https://dsaf465859jzs.cloudfront.net/files/n1HUsOzOTOiwtrwfX4dv8w.jpg" }}></Image>
                <Image style={styles.image} source={{ uri: "https://dsaf465859jzs.cloudfront.net/files/n1HUsOzOTOiwtrwfX4dv8w.jpg" }}></Image>
                <Image style={styles.image} source={{ uri: "https://dsaf465859jzs.cloudfront.net/files/n1HUsOzOTOiwtrwfX4dv8w.jpg" }}></Image>
            </View>
        </LoadingPageComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        height: 160,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#F0FFF0",
    },
    item: {
        width: "33%",
        maxWidth: "33%",
        minWidth: "33%",
    },
    image: {
        width: 130,
        height: 140
    }

});

export default PromotionMenuCollectionComponent;
