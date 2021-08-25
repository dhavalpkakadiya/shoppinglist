import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../helpers/iconConstants';

import style from './styles';

interface Props {
    data: any;
    onDeletePress: (id: string) => void;
}

const ListItem: React.FC<Props> = ({ data, onDeletePress }) => {
    const onDeleteButtonPress = () => {
        if (onDeletePress) onDeletePress(data?.id || '');
    };

    const title = data?.title || '';
    return (
        <View style={style.mainContainer}>
            <Text style={style.titleText}>{title}</Text>
            <TouchableOpacity onPress={onDeleteButtonPress}>
                <Image
                    source={icons.delete}
                    resizeMode={'contain'}
                    style={style.deleteIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;
