import Axios from 'axios';
import {API} from '../../assets/endpoints/endpoints';
import {Recipe} from '../recipe/types';
import {SET_RECIPES} from '../user/types';
import {RecipeActionTypes} from './types';

export const setRecipes = (recipes: Recipe[]): RecipeActionTypes => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

export const getRecipesInfo = () => {
  return (dispatch: any) => {
    Axios.post(API, {
      query: `{
        getAllRecipes {
          id
          prepTime
          cookTime
          category
          name
          reviewCount
          reviewRating
          imageUrl
          creator {
            id
            name
          }
        }
      }`,
    })
      .then(function (response: any) {
        if (response.status == 200) {
          console.log('called');
          console.log(response.data.data.getAllRecipes);
          const parsed_recipes: Recipe[] = response.data.data.getAllRecipes;

          console.log("parsed", parsed_recipes)

          dispatch(setRecipes(parsed_recipes));
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
