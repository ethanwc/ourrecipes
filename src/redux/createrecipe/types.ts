import {Direction, Ingredient} from '../recipe/types';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const EDIT_INGREDIENT = 'EDIT_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const ADD_DIRECTION = 'ADD_DIRECTION';
export const EDIT_DIRECTION = 'EDIT_DIRECTION';
export const REMOVE_DIRECTION = 'REMOVE_DIRECTION';

export const SET_PREPTIME = 'SET_PREPTIME';
export const SET_COOKTIME = 'SET_COOKTIME';
export const SET_SERVINGS = 'SET_SERVINGS';
export const SET_NAME = 'SET_NAME';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_CATEGORY = 'SET_CATEGORY';

export interface CreateRecipeState {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servingSize: string;
  ingredients: Ingredient[];
  directions: Direction[];
}

interface AddIngredientAction {
  type: typeof ADD_INGREDIENT;
  payload: Ingredient;
}

interface EditIngredientAction {
  type: typeof EDIT_INGREDIENT;
  payload: Ingredient;
}

interface RemoveIngredientAction {
  type: typeof REMOVE_INGREDIENT;
  payload: Ingredient;
}

interface AddDirectionAction {
  type: typeof ADD_DIRECTION;
  payload: Direction;
}

interface EditDirectionAction {
  type: typeof EDIT_DIRECTION;
  payload: Direction;
}

interface RemoveDirectionAction {
  type: typeof REMOVE_DIRECTION;
  payload: Direction;
}

interface SetPrepTimeAction {
  type: typeof SET_PREPTIME;
  payload: string;
}

interface SetCookTimeAction {
  type: typeof SET_COOKTIME;
  payload: string;
}

interface SetServingsAction {
  type: typeof SET_SERVINGS;
  payload: string;
}

interface SetNameAction {
  type: typeof SET_NAME;
  payload: string;
}

interface SetDescriptionAction {
  type: typeof SET_DESCRIPTION;
  payload: string;
}

interface SetImageAction {
  type: typeof SET_IMAGE;
  payload: string;
}

interface SetCategoryAction {
  type: typeof SET_CATEGORY;
  payload: string;
}
export type CreateRecipeActionTypes =
  | AddIngredientAction
  | EditIngredientAction
  | RemoveIngredientAction
  | AddDirectionAction
  | EditDirectionAction
  | RemoveDirectionAction
  | SetPrepTimeAction
  | SetCookTimeAction
  | SetServingsAction
  | SetNameAction
  | SetDescriptionAction
  | SetImageAction
  | SetCategoryAction;
