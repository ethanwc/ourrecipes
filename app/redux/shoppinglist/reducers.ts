import { ShoppingListItem, ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, ShoppingItemActionTypes } from "./types";

export interface ShoppinglistState {
    items: ShoppingListItem[]
}

const initialState: ShoppinglistState = {
    items: [
        {
            name: 'Pizza Sauce',
            checked: true,
            creationDate: new Date()
        }
    ]
}

const ShoppingList = (state = initialState, action: ShoppingItemActionTypes) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                items: [...state.items, action.payload],
            };
        case EDIT_ITEM:
            return {
                items: [...state.items.splice(1)]
            };
        case REMOVE_ITEM:
            return {
                items: [...state.items.splice(0)]
            }
        default:
            return state;
    }
};

export default ShoppingList;
