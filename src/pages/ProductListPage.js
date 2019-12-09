import React, { Component } from 'react';
import { StyleSheet, Text, Image, Platform } from 'react-native'
import LoadingPageComponent from '../component/LoadingPageComponent';
import ProductListComponent from '../component/product/ProductListComponent'
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

/**
 * 产品列表组件
 * 
 * */
class ProductListPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "产品分类",//navigation.getParams('title')
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center',
                flex: 1,
            },
            headerTitleContainerStyle: {
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    }

    render() {

        //const { loading, data, onLoadMore, onReload } = this.props;

        return (
            <LoadingPageComponent style={styles.container} loading={false}>
                <ProductListComponent />
            </LoadingPageComponent>
        )
    }
};



const styles = StyleSheet.create({
    container: {
        flex:1,
        // height: 75,
        // backgroundColor: "#CDC0B0",
    },
});

export default ProductListPage;