import {
  CREATE_RECIPE,
  RecipeState,
  RecipeActionTypes,
  Recipe,
  SET_RECIPE,
} from './types';

export const RecipeReducer = (
  state: RecipeState = {
    recipe: {
      id: 'asdf',
      category: 'Dinner',
      name: 'Breaded Porkchops',
      servingSize: 2,
      cookTime: '00:30',
      prepTime: '00:05',
      creationDate: new Date().toLocaleDateString(),
      creator: {
        id: 'asdf',
        // bio: 'asdf',
        // location: 'asdf',
        photo: 'asdf',
        email: 'failedtoload@ourrecipes.app',
        name: 'Failed to load',
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
      ingredients: [],
      directions: [],
      bookmarks: [],
      reviews: [],
      reviewCount: 23,
      reviewRating: 4.4,
      reviewDistribution: [],
    },
  },
  action: RecipeActionTypes,
) => {
  switch (action.type) {
    case SET_RECIPE:
      return {
        recipe: action.payload,
      };
    default:
      return state;
  }
};
