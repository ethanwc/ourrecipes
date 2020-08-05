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
import {Ingredient, Direction, RecipeState} from '../recipe/types';

export const CreateRecipeReducer = (
  state: CreateRecipeState = {ingredients: [], directions: []},
  action: CreateRecipeActionTypes,
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ingredients: state.ingredients,
        directions: state.directions,
      };

    case EDIT_INGREDIENT:
      return {
        ingredients: state.ingredients.map((ingredient: Ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient,
        ),
        directions: state.directions,
      };
    case REMOVE_INGREDIENT:
      return {
        ingredients: [
          ...state.ingredients.filter(
            (ingredient: Ingredient) => ingredient.id !== action.payload.id,
          ),
        ],
        directions: state.directions,
      };

    case ADD_DIRECTION:
      return {
        ingredients: state.ingredients,
        directions: [...state.directions, action.payload],
      };
    case EDIT_DIRECTION:
      return {
        ingredients: state.ingredients,
        directions: state.directions.map((direction: Direction) =>
          direction.id === action.payload.id ? action.payload : direction,
        ),
      };
    case REMOVE_DIRECTION:
      return {
        ingredients: state.ingredients,
        directions: [
          ...state.directions.filter(
            (direction: Direction) => direction.id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};
