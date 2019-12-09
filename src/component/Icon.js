import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native'


const Icon = ({ style, active, label }) => {
    let icon;
    if (label === "home") {
        icon = active ? require('../asset/img/home_active.png') : require('../asset/img/home.png');
    } else if (label === "ca") {
        icon = active ? require('../asset/img/ca_active.png') : require('../asset/img/ca.png');
    } else if (label === "shopping_card") {
        icon = active ? require('../asset/img/shopping_card_active.png') : require('../asset/img/shopping_card.png');
    } else if (label === "me") {
        icon = active ? require('../asset/img/me_active.png') : require('../asset/img/me.png');
    }
    return (
        <Image style={style} source={icon}></Image>
    );
}

export default Icon;