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

export const setPhoto = (uri: String): UserActionTypes => {
  return {
    type: SET_PHOTO,
    payload: uri,
  };
};

export const setUserPhotoAsync = (uri: string) => {
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
        query: `mutation {
          updatePicture (userId: "google_105903723515146180187", photoUri: "${uri}") {
            id
            photo
          }
        }`,
      },
    )
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
      },
    )
      .then(function (response: any) {
        // handle success

        if (response.status == 200) {
          const parsed_user: User = response.data.data.user[0];
          console.log('d:', response.data.data.user[0]);
          console.log('f:', parsed_user);
          dispatch(setUser(parsed_user));
          // dispatch(setRecipes(parsed_recipes));
          // todo: change to all user data parsed
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
