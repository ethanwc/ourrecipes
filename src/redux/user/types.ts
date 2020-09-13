import {Bookmark, Recipe} from '../recipe/types';
import {MiniRecipe} from 'src/containers/Recipe/MiniRecipeCard';

export const SET_USER = 'SET_USER';
export const SET_SESSION = 'SET_SESSION';
export const SET_PHOTO = 'SET_PHOTO';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';

export interface UserState {
  user: User;
  session: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  // location?: string;
  // bio?: string;
  creationDate: Date;
  /** String arrays represent mongodb direct ids */
  groups: string[];
  bookmarks: string[];
  shoppinglist: string[];
  followers: string[];
  following: string[];
  recipes: MiniRecipe[];
  reviews: string[];
  pictures: string[];
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SetSessionAction {
  type: typeof SET_SESSION;
  payload: User;
}

interface SetBookmarkAction {
  type: typeof ADD_BOOKMARK;
  payload: Bookmark;
}

interface RemoveBookmarkAction {
  type: typeof REMOVE_BOOKMARK;
  payload: Bookmark;
}

interface SetRecipesAction {
  type: typeof SET_RECIPES;
  payload: MiniRecipe[];
}

interface AddRecipeAction {
  type: typeof ADD_RECIPE;
  payload: MiniRecipe;
}

interface SetPhotoAction {
  type: typeof SET_PHOTO;
  payload: String;
}

export type UserActionTypes =
  | SetUserAction
  | SetSessionAction
  | SetBookmarkAction
  | RemoveBookmarkAction
  | SetRecipesAction
  | SetPhotoAction
  | AddRecipeAction;
