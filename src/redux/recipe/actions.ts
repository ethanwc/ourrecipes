import {CREATE_RECIPE, RecipeActionTypes, Recipe} from './types';
import Axios from 'axios';

export const add = (newItem: Recipe): RecipeActionTypes => {
  return {
    type: CREATE_RECIPE,
    payload: newItem,
  };
};