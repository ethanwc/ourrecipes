import {
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_DIRECTION,
  EDIT_DIRECTION,
  REMOVE_DIRECTION,
  SET_PREPTIME,
  SET_COOKTIME,
  SET_SERVINGS,
  SET_CATEGORY,
  SET_IMAGE,
  SET_DESCRIPTION,
  SET_NAME,
  CreateRecipeState,
  CreateRecipeActionTypes,
} from './types';
import {Ingredient, Direction} from '../recipe/types';

export const CreateRecipeReducer = (
  state: CreateRecipeState = {
    category: '',
    name: 'asdf',
    description: 'asdf',
    image: '',
    cookTime: '11:22',
    prepTime: '03:24',
    servingSize: '4',
    ingredients: [],
    directions: [],
  },
  action: CreateRecipeActionTypes,
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: [...state.ingredients, action.payload],
        directions: state.directions,
      };

    case EDIT_INGREDIENT:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients.map((ingredient: Ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient,
        ),
        directions: state.directions,
      };
    case REMOVE_INGREDIENT:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: [
          ...state.ingredients.filter(
            (ingredient: Ingredient) => ingredient.id !== action.payload.id,
          ),
        ],
        directions: state.directions,
      };

    case ADD_DIRECTION:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: [...state.directions, action.payload],
      };
    case EDIT_DIRECTION:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions.map((direction: Direction) =>
          direction.id === action.payload.id ? action.payload : direction,
        ),
      };
    case REMOVE_DIRECTION:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: [
          ...state.directions.filter(
            (direction: Direction) => direction.id !== action.payload.id,
          ),
        ],
      };
    case SET_PREPTIME:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: action.payload,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_COOKTIME:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: action.payload,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_SERVINGS:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: action.payload,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_NAME:
      return {
        name: action.payload,
        description: state.description,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_DESCRIPTION:
      return {
        name: state.name,
        description: action.payload,
        image: state.image,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_IMAGE:
      return {
        name: state.name,
        description: state.description,
        image: action.payload,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_CATEGORY:
      return {
        name: state.name,
        description: state.description,
        image: state.image,
        category: action.payload,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };

    default:
      return state;
  }
};
