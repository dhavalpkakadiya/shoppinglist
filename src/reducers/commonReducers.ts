import {RESET_STORE, GET_SHOPPING_DATA} from '../actions/types';

const INITIAL_STATE = {
  shoppingList: [],
  shoppingListCount: 0,
};

export default (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_SHOPPING_DATA:
      return {
        ...state,
        shoppingList: action?.payload?.shoppingList || [],
        shoppingListCount: action?.payload?.shoppingListCount || 0,
      };
    case RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
