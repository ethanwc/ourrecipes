import {Recipe} from '../recipe/types';

export const SET_RECIPES = 'SET_RECIPES';

export interface RecipesState {
  recipes: Recipe[];
}

interface SetRecipesAction {
  type: typeof SET_RECIPES;
  payload: Recipe[];
}

export type RecipeActionTypes = SetRecipesAction;
