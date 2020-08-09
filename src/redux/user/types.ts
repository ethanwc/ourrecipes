export const SET_USER = 'SET_USER';
export const SET_SESSION = 'SET_SESSION';

export interface UserState {
  user: User;
  session: any;
}

export interface User {
  name: string;
  email: string;
  photo?: string;
  location?: string;
  bio?: string;
  creationDate: Date;
  /** String arrays represent mongodb direct ids */
  recipes: string[];
  groups: string[];
  bookmarks: string[];
  shoppinglist: string[];
  followers: string[];
  following: [];
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

export type UserActionTypes = SetUserAction | SetSessionAction;
