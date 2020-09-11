import {
  SET_SESSION,
  User,
  UserState,
  UserActionTypes,
  SET_USER,
  ADD_BOOKMARK,
  SET_RECIPES,
  SET_PHOTO,
} from './types';

export const UserReducer = (
  state: UserState = {
    session: null,
    user: {
      name: 'Loading Name',
      email: 'loadingemail@ourrecipes.app',
      photo: '',
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
    case SET_RECIPES:
      let updated_user = state.user;
      updated_user.recipes = [...action.payload];
      console.log('update:', updated_user.recipes);
      return {
        user: {
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          recipes: [...action.payload],
          photo: state.user.photo,
          groups: state.user.groups,
          bookmarks: state.user.bookmarks,
          shoppinglist: state.user.shoppinglist,
          followers: state.user.followers,
          following: state.user.following,
          reviews: state.user.reviews,
          pictures: state.user.pictures,
        },
        session: state.session,
      };
    case SET_SESSION:
      return {
        user: state.user,
        session: action.payload,
      };
    case SET_PHOTO:
      return {
        user: {
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          photo: action.payload,
          recipes: state.user.recipes,
          groups: state.user.groups,
          bookmarks: state.user.bookmarks,
          shoppinglist: state.user.shoppinglist,
          followers: state.user.followers,
          following: state.user.following,
          reviews: state.user.reviews,
          pictures: state.user.pictures,
        },
        session: state.session,
      };

    case ADD_BOOKMARK: {
      let updated_user = state.user;
      updated_user.bookmarks.push('asdf');

      return {
        user: updated_user,
        session: state.session,
      };
    }
    default:
      return state;
  }
};
