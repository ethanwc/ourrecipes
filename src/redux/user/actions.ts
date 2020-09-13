import Axios from 'axios';
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_RECIPES,
  SET_SESSION,
  SET_USER,
  User,
  UserActionTypes,
  SET_PHOTO,
  ADD_RECIPE,
} from './types';
import {Bookmark, Recipe} from '../recipe/types';
import {MiniRecipe} from '../../containers/Recipe/MiniRecipeCard';
import {API} from '../../assets/endpoints/endpoints';

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
    type: ADD_BOOKMARK,
    payload: bookmark,
  };
};

export const removeBookmark = (bookmark: Bookmark): UserActionTypes => {
  return {
    type: REMOVE_BOOKMARK,
    payload: bookmark,
  };
};

export const setRecipes = (recipes: MiniRecipe[]): UserActionTypes => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

export const addRecipe = (recipes: MiniRecipe): UserActionTypes => {
  return {
    type: ADD_RECIPE,
    payload: recipes,
  };
};

export const setPhoto = (uri: String): UserActionTypes => {
  return {
    type: SET_PHOTO,
    payload: uri,
  };
};

export const setUserPhotoAsync = (jwt: string, uri: string) => {
  return (dispatch: any) => {
    Axios.post(API, {
      query: `mutation {
          updatePicture (jwt: "${jwt}", photoUri: "${uri}") {
            id
            photo
          }
        }`,
    })
      .then(function (response: any) {
        if (response.status == 200) {
          const newPhoto = response.data.data.updatePicture.photo;
          dispatch(setPhoto(newPhoto));
        } else {
          console.log('Err non 200');
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
};

export const getUserInfo = (id: string) => {
  return (dispatch: any) => {
    Axios.post(API, {
      query: `{
          user (ids: ["${id}"]) {
              name
              email
              photo
              bio
              creationDate
              bookmarks
              shoppinglist {
                id
                name
                checked
                creationDate
              }
              pictures
              followers {
                id
              }
              following {
                id
              }
              reviews {
                id
                recipeid
                rating
                review
              }
              recipes {
                name
                imageUrl
                reviewCount
                reviewDistribution
              }
              pictures
          }
      }`,
    })
      .then(function (response: any) {
        if (response.status == 200) {
          const parsed_user: User = response.data.data.user[0];
          console.log('f:', parsed_user);
          dispatch(setUser(parsed_user));
        } else {
          console.log('Err non 200');
        }
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //todo stop animation
      });
  };
};
