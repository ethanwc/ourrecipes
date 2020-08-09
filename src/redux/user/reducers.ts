import {SET_SESSION, User, UserState, UserActionTypes, SET_USER} from './types';

export const UserReducer = (
  state: UserState = {
    session: null,
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
        session: state.session,
      };
    case SET_SESSION:
      return {
        user: state.user,
        session: action.payload,
      };
    default:
      return state;
  }
};
