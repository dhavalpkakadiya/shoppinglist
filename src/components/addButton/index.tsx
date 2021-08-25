import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import style from './styles';

interface Props {
    onPress: () => void;
}

const AddButton: React.FC<Props> = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={style.mainContainer}
            onPress={onPress}
            activeOpacity={0.5}
        >
            <Text style={style.addText}>{'+'}</Text>
        </TouchableOpacity>
    );
};

export default AddButton;
