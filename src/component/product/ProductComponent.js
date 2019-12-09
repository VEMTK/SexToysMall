import React, { useEffect } from 'react';
import { StyleSheet, Text, Image } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';
import Swiper from 'react-native-swiper'

//产品信息
const ProductComponent = ({ product }) => {

    useEffect(() => {

    }, [product]);

    return (
        <LoadingPageComponent style={styles.container} loading={false}>
            <ProductImageSwiper></ProductImageSwiper>
            <ProductIntroductionComponent></ProductIntroductionComponent>
            <ProductServiceComponent></ProductServiceComponent>
        </LoadingPageComponent>
    );
};

//图片轮播图
const ProductImageSwiper = ({ imageData }) => {
    return (
        <Swiper>
            
        </Swiper>
    );
}

//产品简介
const ProductIntroductionComponent = ({ data }) => {

}

//产品享受的服务
const ProductServiceComponent = ({ data }) => {

}

const styles = StyleSheet.create({
    container: {
        height: 75,
        backgroundColor: "#CDC0B0",
    },
});

export default ProductComponent;
