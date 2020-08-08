import {CREATE_RECIPE, RecipeState, RecipeActionTypes, Recipe} from './types';

export const RecipeReducer = (
  state: RecipeState = {
    recipes: [
      {
        id: 'asdf',
        category: 'Dinner',
        name: 'Breaded Porkchops',
        servingSize: 2,
        cookTime: '00:30',
        prepTime: '00:05',
        creationDate: new Date().toLocaleDateString(),
        creatorid: 'asdf',
        reviewCount: 44,
        reviewRating: 4.4,
        imageUrl:
          'http://res.cloudinary.com/dk4gnl6ww/image/upload/v1596919037/nmkttrup9beqvmd2ypps.jpg',

        directions: [
          {
            id: 'asdasdf',
            instruction: 'Heat a fryer to 400 degrees',
            step: 1,
            imageUrl:
              'http://res.cloudinary.com/dk4gnl6ww/image/upload/v1596919037/nmkttrup9beqvmd2ypps.jpg',
          },
        ],
        ingredients: [
          {
            amount: 2,
            id: 'fsfe',
            name: 'Porkchops',
            unit: 'pieces',
          },
        ],
      },
    ],
  },
  action: RecipeActionTypes,
) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        recipes: [...state.recipes, action.payload],
      };
    default:
      return state;
  }
};
