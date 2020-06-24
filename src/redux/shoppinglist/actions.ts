import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, ShoppingItemActionTypes, ShoppingListItem } from "./types";

export const add = (newItem: ShoppingListItem): ShoppingItemActionTypes => {
  return {
    type: ADD_ITEM,
    payload: newItem
  };
};

export const edit = (newItem: ShoppingListItem): ShoppingItemActionTypes => {
  return {
    type: EDIT_ITEM,
    payload: newItem,
    targetid: 'ASDF'
  };
};

export const remove = (id: string): ShoppingItemActionTypes => {
    return {
      type: REMOVE_ITEM,
      itemid: id
    };
  };
  
