import {createStore, combineReducers} from 'redux';
import {ShoppingList} from './shoppinglist/reducers';
import {ShoppinglistState} from './shoppinglist/types';
import {Groups} from './group/reducers';
import {GroupsState} from './group/types';
import {UserReducer} from './user/reducers';
import {UserState} from './user/types';
import {RecipeReducer} from './recipe/reducers';
import {RecipeState} from './recipe/types';
import {CreateRecipeReducer} from './createrecipe/reducers';
import {CreateRecipeState} from './createrecipe/types';

const initialShoppingListState: ShoppinglistState = {
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
    creationDate: new Date(),
    recipes: [],
    groups: [],
    bookmarks: [],
    shoppinglist: [],
    followers: [],
    following: [],
    reviews: [],
    pictures: [],
  },
};

const initialRecipeState: RecipeState = {
  recipes: [
    {
      id: '123-dad-2-d',
      category: 'Dinner',
      creatorid: '11djd-d2d',
      name: 'Chicken Pot Pie',
      prepTime: '30',
      cookTime: '1:00',
      creationDate: new Date().toLocaleDateString().toString(),
      servingSize: 4,
      directions: [
        {
          id: 'uuidasdf',
          step: 1,
          instruction: 'Cut up some chicken',
          imageUrl: 'https://google.com/chicken',
        },
      ],
      ingredients: [
        {
          id: 'uuidasdf',
          name: 'flour',
          amount: 1,
          unit: 'cup',
        },
      ],
    },
  ],
};

const initialCreateRecipeState: CreateRecipeState = {
  category: '',
  cookTime: '',
  name: 'initialname',
  description: 'initialdescription',
  image: '',
  prepTime: '',
  servingSize: '4',
  directions: [
    {
      id: 'uuidasdf',
      step: 1,
      instruction: 'Cut up some chicken',
      imageUrl: 'https://google.com/chicken',
    },
  ],
  ingredients: [
    {
      id: 'uuidasdf',
      name: 'flour',
      amount: 1,
      unit: 'cup',
    },
  ],
};

// Root application state types
export interface RootState {
  ShoppingList: ShoppinglistState;
  Groups: GroupsState;
  UserReducer: UserState;
  RecipeReducer: RecipeState;
  CreateRecipeReducer: CreateRecipeState;
}
const rootReducer = combineReducers({
  ShoppingList,
  Groups,
  UserReducer,
  RecipeReducer,
  CreateRecipeReducer,
});

const initialState: RootState = {
  ShoppingList: initialShoppingListState,
  Groups: initialGroupsState,
  UserReducer: initialUserState,
  RecipeReducer: initialRecipeState,
  CreateRecipeReducer: initialCreateRecipeState,
};

export const store = createStore(rootReducer, initialState);
