import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';
import Swiper from "react-native-swiper"

//首页大屏促销组件
const PromotionalScreenComponent = ({ onScreenClick }) => {

    useEffect(() => {

        function queryData() {
        }

        queryData();

    }, []);

    return (
        <LoadingPageComponent style={styles.container} loading={false}>
            <Swiper autoplay={true} autoplayTimeout={3.5}>
                <TouchableWithoutFeedback onPress={() => {
                    onScreenClick({});
                }}>
                    <Image style={styles.image1} source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572092877911&di=109ade49eda7ca5512f95f0be3be46e7&imgtype=0&src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F150412%2F1-1504122004420-L.jpg" }}></Image>
                </TouchableWithoutFeedback>
                <Image style={styles.image1} source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572092877911&di=109ade49eda7ca5512f95f0be3be46e7&imgtype=0&src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F150412%2F1-1504122004420-L.jpg" }}></Image>
                <Image style={styles.image1} source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572092877911&di=109ade49eda7ca5512f95f0be3be46e7&imgtype=0&src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F150412%2F1-1504122004420-L.jpg" }}></Image>
            </Swiper>

        </LoadingPageComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 175,
        backgroundColor: 'red',
    },
    image1: {
        width: "100%",
        height: 175,
    },
});

export default PromotionalScreenComponent;
