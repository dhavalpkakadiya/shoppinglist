import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addShoppingItem, deleteShoppingItem, getShoppingData } from '../../actions';
import { AddButton, AddItemModal, EmptyListComponent, Header, ListItem } from '../../components';
import style from './styles';

const ShoppingList = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const { shoppingList } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingData());
  }, []);

  const onModalClosePress = () => setAddModalVisible(false);

  const onAddButtonPress = () => setAddModalVisible(true);

  const onAddItemPress = (title: string) => {
    dispatch(addShoppingItem(title))
    onModalClosePress();
  };

  const onDeleteItemPress = (id: string) => {
    dispatch(deleteShoppingItem(id))
    onModalClosePress();
  };

  const renderItem = ({ item }: any) => {
    return (
      <ListItem
        data={item}
        onDeletePress={onDeleteItemPress}
      />
    );
  };
  const keyExtractor = (item: any) => item?.id;

  return (
    <View style={style.mainContainer}>
      <Header />
      <FlatList
        data={shoppingList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptyListComponent />}
      />
      <AddItemModal
        isVisible={isAddModalVisible}
        onClosePress={onModalClosePress}
        onAddPress={onAddItemPress}
      />
      <AddButton
        onPress={onAddButtonPress}
      />
    </View>
  );
};

export default ShoppingList;
