import {
  ADD_GROUP,
  EDIT_GROUP,
  REMOVE_GROUP,
  GroupActionTypes,
  Group,
} from './types';
const axios = require('axios').default;

export const add = (newGroup: Group): GroupActionTypes => {
  return {
    type: ADD_GROUP,
    payload: newGroup,
  };
};

export const edit = (updatedGroup: Group): GroupActionTypes => {
  return {
    type: EDIT_GROUP,
    payload: updatedGroup,
  };
};

export const remove = (id: string): GroupActionTypes => {
  return {
    type: REMOVE_GROUP,
    groupid: id,
  };
};

//todo: function to get groups, another to set, one action dispatches another. look into 'thunk' middleware.

export const createGroupAsync = () => {
  return (dispatch: any) => {
    // Make a request for a user with a given ID
    axios
      .post(
        'https://fuxxebseq4.execute-api.us-west-2.amazonaws.com/Prod/graphql',
        {
          query: `{
          user (ids: ["google_105903723515146180187"]) {
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
        dispatch(
          add({
            id: 'asdfd',
            name: 'asddddf',
            creatorid: 'asdddf',
            creationDate: new Date(),
            memberids: ['asdff'],
          }),
        );
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
