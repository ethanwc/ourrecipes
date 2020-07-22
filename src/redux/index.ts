import { ShoppinglistState } from './shoppinglist/types';
import { GroupsState } from './group/types';
import { ShoppingList } from './shoppinglist/reducers';
import { Groups } from './group/reducers';
import { createStore, combineReducers } from 'redux';
import { UserState, User } from './user/types';
import { UserReducer } from './user/reducers';
import { RecipeReducer } from './recipe/reducers';
import { RecipeState } from './recipe/types';

// Root application state types
export interface RootState {
  ShoppingList: ShoppinglistState;
  Groups: GroupsState;
  UserReducer: UserState;
  RecipeReducer: RecipeState;
}

const initialShoppingList: ShoppinglistState = {
  items: [
    { id: 'wtf', name: 'test1234', checked: false, creationDate: new Date() },
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

const initialRecipeState: RecipeState = {
  recipes: [{
    id: '123-dad-2-d',
    category: 'Dinner',
    creatorid: '11djd-d2d',
    name: 'Chicken Pot Pie',
    prepTime: '30',
    cookTime: '1:00',
    creationDate: new Date().toLocaleDateString().toString(),
    servingSize: 4,
    directions: [{
      step: 1,
      instruction: 'Cut up some chicken',
      imageUrl: 'https://google.com/chicken'
    }],
    ingredients:
      [{
        name: "flour",
        amount: 1,
        unit: "cup"
      }]
  }]
}

const rootReducer = combineReducers({
  ShoppingList,
  Groups,
  UserReducer,
  RecipeReducer,
});

const initialState: RootState = {
  ShoppingList: initialShoppingList,
  Groups: initialGroupsState,
  UserReducer: initialUserState,
  RecipeReducer: initialRecipeState,
};

export const store = createStore(rootReducer, initialState);
