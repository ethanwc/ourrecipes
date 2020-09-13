import Axios from 'axios';
import {API} from '../../assets/endpoints/endpoints';
import {CREATE_RECIPE, RecipeActionTypes, Recipe, SET_RECIPE} from './types';

export const setRecipe = (recipe: Recipe): RecipeActionTypes => {
  return {
    type: SET_RECIPE,
    payload: recipe,
  };
};

export const getRecipeInfo = (id: string) => {
  return (dispatch: any) => {
    Axios.post(API, {
      query: `{
        recipe (ids: ["${id}"]) {
          id
          creator {
            id
            name
            photo
            recipes {
              id
            }
          }
          name
          description
          imageUrl
          reviewCount
          reviewRating
          creationDate
          prepTime
          cookTime
          servingSize
          category
          ingredients {
            id
            name
            amount
            unit
          }
          directions {
            id
            instruction
            step
            imageUrl
          }
          reviewDistribution
        }
      }`,
    })
      .then(function (response: any) {
        if (response.status == 200) {
          const parsed_recipe: Recipe = response.data.data.recipe[0];
          dispatch(setRecipe(parsed_recipe));
        } else {
          console.log('Err non 200');
        }
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
