import {SET_USER, User, UserState, UserActionTypes} from './types';

export const UserReducer = (
  state: UserState = {
    user: {
      name: 'Loading Name',
      email: 'loadingemail@ourrecipes.app',
      creationDate: new Date(),
      recipes: [],
      groups: [],
      bookmarks: [],
      shoppinglist: [],
      followers: [],
      following: [],
      reviews: [],
      pictures: [],
    },
  },
  action: UserActionTypes,
) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
