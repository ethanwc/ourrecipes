import {ShoppinglistState} from './shoppinglist/types';
import {GroupsState} from './group/types';
import {ShoppingList} from './shoppinglist/reducers';
import {Groups} from './group/reducers';
import {createStore, combineReducers} from 'redux';
import {UserState, User} from './user/types';
import {UserReducer} from './user/reducers';
// Root application state types
export interface RootState {
  ShoppingList: ShoppinglistState;
  Groups: GroupsState;
  UserReducer: UserState;
}

const initialShoppingList: ShoppinglistState = {
  items: [
    {id: 'wtf', name: 'test1234', checked: false, creationDate: new Date()},
  ],
};

const initialGroupsState: GroupsState = {
  groups: [
    {
      id: '123123',
      name: 'Failed to load groups',
      creatorid: '123',
      creationDate: new Date(),
      membercount: 0,
      memberids: [],
    },
  ],
};

const initialUserState: UserState = {
  user: {
    email: 'failedtoload@ourrecipes.app',
    name: 'Failed to load',
    phoneNumber: '',
  },
};

const rootReducer = combineReducers({
  ShoppingList,
  Groups,
  UserReducer,
});

const initialState: RootState = {
  ShoppingList: initialShoppingList,
  Groups: initialGroupsState,
  UserReducer: initialUserState,
};

export const store = createStore(rootReducer, initialState);
