import Axios from 'axios';
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_RECIPES,
  SET_SESSION,
  SET_USER,
  User,
  UserActionTypes,
} from './types';
import {Bookmark, Recipe} from '../recipe/types';
import {MiniRecipe} from 'src/containers/Recipe/MiniRecipeCard';

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
export const getUserInfo = (id: string) => {
  console.log('get user info called');
  return (dispatch: any) => {
    // Make a request for a user with a given ID
    //todo: only grab needed data.
    /*
         ingredients {
                  id
                } */
    Axios.post(
      'https://fuxxebseq4.execute-api.us-west-2.amazonaws.com/Prod/graphql',
      {
        query: `{
          user (ids: ["${id}"]) {
              id
              name
              email
              bookmarks
              recipes {
                name
                imageUrl
                reviewCount
                reviewDistribution
              }
          }
      }`,
      },
    )
      .then(function (response: any) {
        // handle success

        const parsed_recipes: MiniRecipe[] = response.data.data.user[0].recipes;
        console.log("parsed: ", parsed_recipes);
        dispatch(setRecipes(parsed_recipes));
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
