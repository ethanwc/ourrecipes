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

