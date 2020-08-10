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
  session: null,
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
      id: 'asdf',
      category: 'Dinner',
      name: 'Breaded Porkchops',
      servingSize: 2,
      cookTime: '00:30',
      prepTime: '00:05',
      creationDate: new Date().toLocaleDateString(),
      creatorid: 'asdf',
      creatorName: 'Steve Jobs',
      reviewCount: 44,
      reviewRating: 4.4,
      imageUrl:
        'http://res.cloudinary.com/dk4gnl6ww/image/upload/v1596919037/nmkttrup9beqvmd2ypps.jpg',
      reviews: [
        {
          id: 'dawdawdwa',
          creatorid: 'dawdwadw',
          rating: 4,
          review: 'Wow this recipe sucks',
        },
      ],
      directions: [
        {
          id: 'asdasdf',
          instruction: 'Heat a fryer to 400 degrees',
          step: 1,
          imageUrl:
            'http://res.cloudinary.com/dk4gnl6ww/image/upload/v1596919037/nmkttrup9beqvmd2ypps.jpg',
        },
      ],
      ingredients: [
        {
          amount: 2,
          id: 'fsfe',
          name: 'Porkchops',
          unit: 'pieces',
        },
      ],
    },
  ],
};

const initialCreateRecipeState: CreateRecipeState = {
  category: '',
  cookTime: '',
  name: '',
  description: '',
  image: '',
  prepTime: '',
  servingSize: '',
  directions: [],
  ingredients: [],
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
