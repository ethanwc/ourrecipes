import {User} from '../user/types';

export const CREATE_RECIPE = 'CREATE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const SET_RECIPE = 'SET_RECIPE';

export interface RecipeState {
  recipe: Recipe;
}

/** Ingredient type */
export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
}

/** Direction type, image is optional */
export interface Direction {
  id: string;
  instruction: string;
  step: string;
  imageUrl?: string;
}

/** Review type */
export interface Review {
  id: string;
  creatorid: string;
  review: string;
  rating: number;
}

/** Bookmark type */
export interface Bookmark {
  id: string;
  recipeid: string;
  creationDate: string;
}

/** Recipe type */
export interface Recipe {
  id: string;
  name: string;
  imageUrl?: string;
  reviewCount: number;
  reviewRating: number;
  creator: User;
  creationDate: string;
  prepTime: string;
  cookTime: string;
  servingSize: number;
  category: string;
  ingredients: Ingredient[];
  directions: Direction[];
  bookmarks: Bookmark[];
  reviews: Review[];
  reviewDistribution: number[];
}

interface CreateRecipeAction {
  type: typeof CREATE_RECIPE;
  payload: Recipe;
}

interface EditReicpeAction {
  type: typeof EDIT_RECIPE;
  payload: Recipe;
}

interface RemoveRecipeAction {
  type: typeof REMOVE_RECIPE;
  recipeid: string;
}

interface SetRecipeAction {
  type: typeof SET_RECIPE;
  payload: Recipe;
}

export type RecipeActionTypes =
  | CreateRecipeAction
  | EditReicpeAction
  | RemoveRecipeAction
  | SetRecipeAction;
