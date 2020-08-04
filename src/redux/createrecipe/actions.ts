import {
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_DIRECTION,
  EDIT_DIRECTION,
  REMOVE_DIRECTION,
  CreateRecipeActionTypes,
} from './types';
import {Ingredient, Direction} from '../recipe/types';

/** Ingredient actions */
export const addIngredient = (
  newIngredient: Ingredient,
): CreateRecipeActionTypes => {
  return {
    type: ADD_INGREDIENT,
    payload: newIngredient,
  };
};

export const editIngredient = (
  ingredient: Ingredient,
): CreateRecipeActionTypes => {
  return {
    type: EDIT_INGREDIENT,
    payload: ingredient,
  };
};

export const removeIngredient = (
  newItem: Ingredient,
): CreateRecipeActionTypes => {
  return {
    type: REMOVE_INGREDIENT,
    payload: newItem,
  };
};

/** Direction actions  */
export const addDirection = (
  newDirection: Direction,
): CreateRecipeActionTypes => {
  return {
    type: ADD_DIRECTION,
    payload: newDirection,
  };
};

export const editDirection = (
  newDirection: Direction,
): CreateRecipeActionTypes => {
  return {
    type: EDIT_DIRECTION,
    payload: newDirection,
  };
};

export const removeDirection = (
  newDirection: Direction,
): CreateRecipeActionTypes => {
  return {
    type: REMOVE_DIRECTION,
    payload: newDirection,
  };
};
