import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';

const AdComponent = ({ adData }) => {

    useEffect(() => {

        function queryData() {

        }
        queryData();

    }, []);

    return (
        <LoadingPageComponent style={styles.container} loading={false}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text onPress={() => { alert('广告位点击') }}>我是广告位1</Text>
            </View>
        </LoadingPageComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 75,
        backgroundColor: "#CDC0B0",
    },
});

export default AdComponent;
