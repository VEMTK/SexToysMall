import React from 'react';
import { SafeAreaView, Text } from 'react-native';
//等待加载页面
const LoadingPageComponent = ({ loading, children, style }) => {
    if (loading) {
        return (
            <SafeAreaView >
                <Text>加载中...</Text>
            </SafeAreaView>
        );
    } else {
        return <SafeAreaView style={style}>{children}</SafeAreaView>;
    }
};


export default LoadingPageComponent;
