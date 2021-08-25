import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {GET_SHOPPING_DATA} from './types';
import strings from '../helpers/strings';

export const getShoppingData = () => async (dispatch: any) => {
  firestore()
    .collection('ShoppingList')
    .onSnapshot(
      querySnapshot => {
        const finalList: any[] = [];
        querySnapshot.forEach(documentSnapshot => {
          const data = {
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          };
          finalList.push(data);
        });
        dispatch({
          type: GET_SHOPPING_DATA,
          payload: {
            shoppingList: finalList,
            shoppingListCount: finalList?.length || 0,
          },
        });
      },
      error => {
        console.log('getShoppingData error :: ', error);
      },
    );
};

export const addShoppingItem = (title: string) => async () => {
  firestore()
    .collection('ShoppingList')
    .add({title})
    .then(() => {
      // Alert.alert(strings.itemAdded, '');
    })
    .catch(() => {
      Alert.alert(strings.somethingWentWrong, strings.pleaseTryAgain);
    });
};

export const deleteShoppingItem = (id: string) => async () => {
  firestore()
    .collection('ShoppingList')
    .doc(id)
    .delete()
    .then(() => {
      // Alert.alert(strings.itemRemoved, '');
    })
    .catch(() => {
      Alert.alert(strings.somethingWentWrong, strings.pleaseTryAgain);
    });
};
