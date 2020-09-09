import Axios from 'axios';
import {addDirection} from '../createrecipe/actions';
import {
  SET_SESSION,
  UserActionTypes,
  User,
  SET_USER,
  ADD_BOOKMARK,
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

export const getUserInfo = (id: string) => {
  return (dispatch: any) => {
    // Make a request for a user with a given ID
    Axios.post(
      'https://fuxxebseq4.execute-api.us-west-2.amazonaws.com/Prod/graphql',
      {
        query: `{
          user (ids: [${id}]) {
              name
              id
              email
              bookmarks
          }
      }`,
        variables: {
          id: 2,
          city: 'Test',
        },
      },
    )
      .then(function (response: any) {
        // handle success
        console.log(JSON.stringify(response.data));
        // dispatch(
        //   add({
        //     id: 'asdfd',
        //     name: 'asddddf',
        //     creatorid: 'asdddf',
        //     creationDate: new Date(),
        //     memberids: ['asdff'],
        //   }),
        // );
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
