import {
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_DIRECTION,
  EDIT_DIRECTION,
  REMOVE_DIRECTION,
  CreateRecipeState,
  CreateRecipeActionTypes,
} from './types';
import {Ingredient} from '../recipe/types';

export const CreateRecipeReducer = (
  state: CreateRecipeState = {ingredients: [], directions: []},
  action: CreateRecipeActionTypes,
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ingredients: [...state.ingredients, action.payload],
      };
    case EDIT_INGREDIENT:
      return {
        ingredients: state.ingredients.map((ingredient: Ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient,
        ),
      };
    case REMOVE_INGREDIENT:
      return {
        ingredients: [
          ...state.ingredients.filter(
            (ingredient: Ingredient) => ingredient.id !== action.payload.id,
          ),
        ],
      };

    case ADD_DIRECTION:
      return {
        directions: [...state.directions, action.payload],
      };
    case EDIT_DIRECTION:
      return {
        directions: [...state.directions, action.payload],
      };
    case REMOVE_DIRECTION:
      return {
        directions: [...state.directions, action.payload],
      };
    default:
      return state;
  }
};
