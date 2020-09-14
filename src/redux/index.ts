import {createStore, combineReducers, applyMiddleware} from 'redux';
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
import thunk from 'redux-thunk';
import {RecipesState} from './recipes/types';
import {RecipesReducer} from './recipes/reducers';

// Root application state types
export interface RootState {
  ShoppingList: ShoppinglistState;
  Groups: GroupsState;
  UserReducer: UserState;
  RecipeReducer: RecipeState;
  RecipesReducer: RecipesState;
  CreateRecipeReducer: CreateRecipeState;
}
const rootReducer = combineReducers({
  ShoppingList,
  Groups,
  UserReducer,
  RecipeReducer,
  RecipesReducer,
  CreateRecipeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
