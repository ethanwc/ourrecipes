export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export interface ShoppinglistState {
    items: ShoppingListItem[]
}

export interface ShoppingListItem {
    id: string
    name: string
    checked: boolean
    creationDate: Date
}

interface AddItemAction {
    type: typeof ADD_ITEM
    payload: ShoppingListItem
}

interface EditItemAction {
    type: typeof EDIT_ITEM
    payload: ShoppingListItem
    targetid: string
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM
    itemid: string;
}

export type ShoppingItemActionTypes = AddItemAction | EditItemAction | RemoveItemAction;
