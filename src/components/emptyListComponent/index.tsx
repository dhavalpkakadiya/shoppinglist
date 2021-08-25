import React from 'react';
import { View, Text } from 'react-native';

import strings from '../../helpers/strings';
import style from './styles';

const EmptyListComponent = () => {
    return (
        <View style={style.mainContainer}>
            <Text style={style.titleText}>{strings.noItems}</Text>
            <Text style={style.titleText}>{strings.addSomeItems}</Text>
        </View>
    );
};

export default EmptyListComponent;
