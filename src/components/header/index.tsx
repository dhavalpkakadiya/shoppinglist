import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import strings from '../../helpers/strings';
import style from './styles';

const Header = () => {
    const { shoppingListCount } = useSelector((state: any) => state.common);

    return (
        <View style={style.mainContainer}>
            <Text style={style.headingText}>{strings.shoppingList}</Text>
            <Text style={style.countText}>{strings.count}{shoppingListCount}</Text>
        </View>
    );
};

export default Header;
