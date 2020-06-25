import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, ShoppingItemActionTypes, ShoppinglistState, ShoppingListItem } from "./types";

export const ShoppingList = (state: ShoppinglistState = { items: [] }, action: ShoppingItemActionTypes) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                items: [...state.items, action.payload],
            };
        case EDIT_ITEM:
            return {
                items: state.items.map((item: ShoppingListItem) => item.id === action.payload.id ? action.payload : item)
            };
        case REMOVE_ITEM:
            return {
                items: [...state.items.filter((item: ShoppingListItem) => item.id !== action.itemid)]
            }
        default:
            return state;
    }
};
