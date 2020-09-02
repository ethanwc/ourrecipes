import Axios from 'axios';
import {addDirection} from '../createrecipe/actions';
import {
  SET_SESSION,
  UserActionTypes,
  User,
  SET_USER,
  SET_BOOKMARK,
  REMOVE_BOOKMARK,
} from './types';
import {Bookmark} from '../recipe/types';

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

export const loginUser = () => {
  return (dispatch: any, getState: any) => {
    Axios.post('/user/login').then((response: any) => {
      if (response['success'] == true) {
        // Login the user using dispatch
        dispatch(
          addDirection({
            id: 'uuidv4',
            instruction: 'Take a cup of potato juice and whisk it',
            step: 1,
            imageUrl: 'https:google.com/image',
          }),
        );
      } else {
        // Send the error from API back
        dispatch(
          addDirection({
            id: 'a',
            instruction: 'Take a cup of potato juice and whisk it',
            step: 1,
            imageUrl: 'https:google.com/image',
          }),
        );
      }
    });
  };
};
