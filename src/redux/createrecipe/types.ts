import {Direction, Ingredient} from '../recipe/types';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const EDIT_INGREDIENT = 'EDIT_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const ADD_DIRECTION = 'ADD_DIRECTION';
export const EDIT_DIRECTION = 'EDIT_DIRECTION';
export const REMOVE_DIRECTION = 'REMOVE_DIRECTION';

export interface CreateRecipeState {
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

export type CreateRecipeActionTypes =
  | AddIngredientAction
  | EditIngredientAction
  | RemoveIngredientAction
  | AddDirectionAction
  | EditDirectionAction
  | RemoveDirectionAction;
