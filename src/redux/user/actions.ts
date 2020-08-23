import {SET_SESSION, UserActionTypes, User, SET_USER, SET_BOOKMARK, REMOVE_BOOKMARK} from './types';
import { Bookmark } from '../recipe/types';

export const setSession = (session: any): UserActionTypes => {
  return {
    type: SET_SESSION,
    payload: session,
  };
};

export const setUser = (user: User): UserActionTypes => {
  return {
    type: SET_USER,
    payload: user,
  };
};


export const addBookmark = (bookmark: Bookmark): UserActionTypes => {
  return {
    type: SET_BOOKMARK,
    payload: bookmark,
  };
};


export const removeBookmark = (bookmark: Bookmark): UserActionTypes => {
  return {
    type: REMOVE_BOOKMARK,
    payload: bookmark,
  };
};
