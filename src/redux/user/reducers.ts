import {Bookmark} from '../recipe/types';
import {
  SET_SESSION,
  User,
  UserState,
  UserActionTypes,
  SET_USER,
  ADD_BOOKMARK,
  SET_RECIPES,
  SET_PHOTO,
  ADD_RECIPE,
  REMOVE_BOOKMARK,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from './types';

export const UserReducer = (
  state: UserState = {
    session: null,
    user: {
      id: 'nullbody',
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
      return {
        user: {
          id: state.user.id,
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
    case ADD_RECIPE:
      return {
        user: {
          id: state.user.id,
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          recipes: [action.payload, ...state.user.recipes],
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
          id: state.user.id,
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

    case ADD_BOOKMARK:
      return {
        user: {
          id: state.user.id,
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          recipes: state.user.recipes,
          photo: state.user.photo,
          groups: state.user.groups,
          bookmarks: [action.payload, ...state.user.bookmarks],
          shoppinglist: state.user.shoppinglist,
          followers: state.user.followers,
          following: state.user.following,
          reviews: state.user.reviews,
          pictures: state.user.pictures,
        },
        session: state.session,
      };
    case REMOVE_BOOKMARK:
      return {
        user: {
          id: state.user.id,
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          recipes: state.user.recipes,
          photo: state.user.photo,
          groups: state.user.groups,
          bookmarks: state.user.bookmarks.filter(
            (bookmark: Bookmark) => bookmark.id !== action.payload,
          ),
          shoppinglist: state.user.shoppinglist,
          followers: state.user.followers,
          following: state.user.following,
          reviews: state.user.reviews,
          pictures: state.user.pictures,
        },
        session: state.session,
      };
    case FOLLOW_USER:
      return {
        user: {
          id: state.user.id,
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          recipes: state.user.recipes,
          photo: state.user.photo,
          groups: state.user.groups,
          bookmarks: state.user.bookmarks,
          shoppinglist: state.user.shoppinglist,
          followers: state.user.followers,
          following: [action.payload, ...state.user.following],
          reviews: state.user.reviews,
          pictures: state.user.pictures,
        },
        session: state.session,
      };
    case UNFOLLOW_USER:
      console.log(state.user.following, action.payload);
      return {
        user: {
          id: state.user.id,
          name: state.user.name,
          email: state.user.email,
          creationDate: state.user.creationDate,
          recipes: state.user.recipes,
          photo: state.user.photo,
          groups: state.user.groups,
          bookmarks: state.user.bookmarks,
          shoppinglist: state.user.shoppinglist,
          followers: state.user.followers,
          following: state.user.following.filter(
            (user: User) => user.id !== action.payload,
          ),
          reviews: state.user.reviews,
          pictures: state.user.pictures,
        },
        session: state.session,
      };
    default:
      return state;
  }
};
