import {ShoppinglistState} from './shoppinglist/types';
import {GroupsState} from './group/types';
import {ShoppingList} from './shoppinglist/reducers';
import {Groups} from './group/reducers';
import {createStore, combineReducers} from 'redux';

// Root application state types
export interface RootState {
  ShoppingList: ShoppinglistState;
  Groups: GroupsState;
}

const initialShoppingList: ShoppinglistState = {
  items: [
    {id: 'wtf', name: 'test1234', checked: false, creationDate: new Date()},
  ],
};

const initialGroupsState: GroupsState = {
  groups: [
    {
      id: 'lol',
      name: 'super grouper',
      creatorid: '123',
      creationDate: new Date(),
      membercount: 10,
      memberids: ['123', '456'],
    },
  ],
};

const rootReducer = combineReducers({
  ShoppingList,
  Groups
});

const initialState: RootState = {
  ShoppingList: initialShoppingList,
  Groups: initialGroupsState,
};

export const store = createStore(rootReducer, initialState);
