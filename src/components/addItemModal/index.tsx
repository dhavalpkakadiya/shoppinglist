import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Modal from 'react-native-modal';

import strings from '../../helpers/strings';
import style from './styles';

interface Props {
    isVisible: boolean;
    onClosePress: () => void;
    onAddPress: (title: string) => void;
}

const AddItemModal: React.FC<Props> = ({ isVisible, onClosePress, onAddPress }) => {
    const [title, setTitle] = useState('');

    const onPress = () => {
        if (title.length) {
            Keyboard.dismiss();
            if (onAddPress) onAddPress(title);
            setTitle('');
        } else {
            Alert.alert(strings.emptyTitleError, '');
        }
    };

    const onChangeText = (text: string) => setTitle(text);

    return (
        <Modal
            isVisible={isVisible}
            style={style.modalContainer}
            avoidKeyboard={true}
            onBackButtonPress={onClosePress}
            onBackdropPress={onClosePress}
        >
            <View style={style.mainContainer}>
                <View style={style.titleContainer}>
                    <Text style={style.titleText}>{strings.addItem}</Text>
                </View>
                <TextInput
                    placeholder={strings.addItemPlaceholder}
                    style={style.input}
                    value={title}
                    onChangeText={onChangeText}
                    returnKeyType={'done'}
                    autoFocus={true}
                />
                <TouchableOpacity style={style.addButton} onPress={onPress}>
                    <Text style={style.addButtonText}>{strings.add}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default AddItemModal;
