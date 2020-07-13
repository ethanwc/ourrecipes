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

export const getGroups = () => {
  // Make a request for a user with a given ID
  axios
    .get('https://nw7oejt71g.execute-api.us-west-2.amazonaws.com/Prod/')
    .then(function (response: any) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
