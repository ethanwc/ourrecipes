import {RecipesState, RecipeActionTypes, SET_RECIPES} from './types';

export const RecipesReducer = (
  state: RecipesState = {recipes: []},
  action: RecipeActionTypes,
) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        recipes: action.payload,
      };
    default:
      return state;
  }
};
