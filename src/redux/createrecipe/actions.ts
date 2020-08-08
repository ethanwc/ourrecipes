import {
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_DIRECTION,
  EDIT_DIRECTION,
  REMOVE_DIRECTION,
  CreateRecipeActionTypes,
  SET_SERVINGS,
  SET_NAME,
  SET_DESCRIPTION,
  SET_IMAGE,
  SET_PREPTIME,
  SET_COOKTIME,
  SET_CATEGORY,
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

export const setPrepTime = (newTime: string): CreateRecipeActionTypes => {
  return {
    type: SET_PREPTIME,
    payload: newTime,
  };
};

export const setCookTime = (newTime: string): CreateRecipeActionTypes => {
  return {
    type: SET_COOKTIME,
    payload: newTime,
  };
};

export const setServings = (newServings: string): CreateRecipeActionTypes => {
  return {
    type: SET_SERVINGS,
    payload: newServings,
  };
};

export const setName = (newName: string): CreateRecipeActionTypes => {
  return {
    type: SET_NAME,
    payload: newName,
  };
};

export const setDescription = (
  newDescription: string,
): CreateRecipeActionTypes => {
  return {
    type: SET_DESCRIPTION,
    payload: newDescription,
  };
};

export const setCategory = (
  newCategory: string,
): CreateRecipeActionTypes => {
  return {
    type: SET_CATEGORY,
    payload: newCategory,
  };
};

export const setImage = (newImage: string): CreateRecipeActionTypes => {
  return {
    type: SET_IMAGE,
    payload: newImage,
  };
};
