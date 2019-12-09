import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import LoadingPageComponent from './LoadingPageComponent';

/**
 * 产品主题推荐
 */
const ProducSubRecomComponent = ({ data }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        function queryData() {

        }

        queryData();

    }, []);

    return (
        <LoadingPageComponent style={styles.container} loading={loading}>
            <View style={styles.container}>
                {/**标题信息 */}
                <View style={styles.title}>
                    <Text style={styles.titleText}>{data.title}</Text>
                </View>
                {/**横幅图 */}
                <View>
                    <Image style={styles.image} source={{ uri: data.imageUri }}></Image>
                </View>
                {/**Item 推荐的主题或者产品 */}
                <View style={styles.productMenuNavigation}>
                    <Image style={styles.image1} source={{ uri: data.imageUri }}></Image>
                    <Image style={styles.image1} source={{ uri: data.imageUri }}></Image>
                    <Image style={styles.image1} source={{ uri: data.imageUri }}></Image>
                    <Image style={styles.image1} source={{ uri: data.imageUri }}></Image>
                    <Image style={styles.image1} source={{ uri: data.imageUri }}></Image>
                    <Image style={styles.image1} source={{ uri: data.imageUri }}></Image>
                </View>
            </View>
        </LoadingPageComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        flex: 1,
        alignContent: "center",
        height: 455,
        backgroundColor: "#CDC0B0",
    },
    title: {
        height: 30,
        justifyContent: "center",
        backgroundColor: "gray",
    },
    titleText: {
        textAlign: "center",
        fontSize: 16,
        letterSpacing: 6,
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 150
    },
    image1: {
        width: "32%",
        height: 130,
        marginStart: 2,
        marginTop: 2
    },
    productMenuNavigation: {
        padding: 3,
        height: "100%",
        backgroundColor: "#87CEFF",
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"

    }
});

export default ProducSubRecomComponent;
