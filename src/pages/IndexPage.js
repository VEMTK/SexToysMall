import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import React, { useEffect, useState } from 'react';
import { View, ScrollView, Modal, Text, TouchableOpacity } from 'react-native';
import Icon from '../component/Icon'

import HomePage from './HomePage'
import CategoryComponent from '../component/CategoryComponent'
import PersonalComponent from '../component/PersonalComponent'


import ProductListPage from './ProductListPage'


const IndexPageNavigator = createBottomTabNavigator({
    主页: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => {
                return (<Icon style={{ width: 21, height: 21 }} active={focused} label="home"></Icon>)
            },
            tabBarLabel: "主页"
        }
    },
    分类: {
        screen: CategoryComponent,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => {
                return (<Icon style={{ width: 21, height: 21 }} active={focused} label="ca"></Icon>)
            },
            tabBarLabel: "分类"
        }
    },
    购物车: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => {
                return (<Icon style={{ width: 21, height: 21 }} active={focused} label="shopping_card"></Icon>)
            },
            tabBarLabel: "购物车"
        }
    },
    我: {
        screen: PersonalComponent,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => {
                return (<Icon style={{ width: 21, height: 21 }} active={focused} label="me"></Icon>)
            },
            tabBarLabel: "我"
        }
    },
}, {
    initialRouteName: "主页",
    tabBarOptions: {
        showIcon: true
    }
});

const RootNavigator = createStackNavigator({
    Index: {
        screen: IndexPageNavigator,
        navigationOptions: {
            headerShown: false
        }
    },
    ProductListPage: {
        screen: ProductListPage,
        navigationOptions:{
        }
    }
}, {
    initialRouteName: 'Index',
});


export default createAppContainer(RootNavigator);
