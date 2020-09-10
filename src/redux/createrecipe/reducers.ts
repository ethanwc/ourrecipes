import {
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_DIRECTION,
  EDIT_DIRECTION,
  REMOVE_DIRECTION,
  SET_PREPTIME,
  SET_COOKTIME,
  SET_SERVINGS,
  SET_CATEGORY,
  SET_IMAGE,
  SET_DESCRIPTION,
  SET_NAME,
  CreateRecipeState,
  CreateRecipeActionTypes,
} from './types';
import {Ingredient, Direction, Recipe} from '../recipe/types';
import Axios from 'axios';

export const CreateRecipeReducer = (
  state: CreateRecipeState = {
    category: '',
    name: 'asdf',
    description: 'asdf',
    imageUrl: '',
    cookTime: '11:22',
    prepTime: '03:24',
    servingSize: '4',
    ingredients: [],
    directions: [],
  },
  action: CreateRecipeActionTypes,
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: [...state.ingredients, action.payload],
        directions: state.directions,
      };

    case EDIT_INGREDIENT:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients.map((ingredient: Ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient,
        ),
        directions: state.directions,
      };
    case REMOVE_INGREDIENT:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: [
          ...state.ingredients.filter(
            (ingredient: Ingredient) => ingredient.id !== action.payload.id,
          ),
        ],
        directions: state.directions,
      };

    case ADD_DIRECTION:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: [...state.directions, action.payload],
      };
    case EDIT_DIRECTION:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions.map((direction: Direction) =>
          direction.id === action.payload.id ? action.payload : direction,
        ),
      };
    case REMOVE_DIRECTION:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: [
          ...state.directions.filter(
            (direction: Direction) => direction.id !== action.payload.id,
          ),
        ],
      };
    case SET_PREPTIME:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: action.payload,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_COOKTIME:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: action.payload,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_SERVINGS:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: action.payload,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_NAME:
      return {
        name: action.payload,
        description: state.description,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_DESCRIPTION:
      return {
        name: state.name,
        description: action.payload,
        imageUrl: state.imageUrl,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_IMAGE:
      return {
        name: state.name,
        description: state.description,
        imageUrl: action.payload,
        category: state.category,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };
    case SET_CATEGORY:
      return {
        name: state.name,
        description: state.description,
        imageUrl: state.imageUrl,
        category: action.payload,
        cookTime: state.cookTime,
        prepTime: state.prepTime,
        servingSize: state.servingSize,
        ingredients: state.ingredients,
        directions: state.directions,
      };

    default:
      return state;
  }
};

export const createNewRecipe = (newRecipe: CreateRecipeState) => {
  return (dispatch: any) => {
    // Make a request to create a recipe
    console.log(newRecipe);
    console.log(newRecipe.directions);
    console.log(JSON.stringify(newRecipe.directions[0]));
    console.log(JSON.parse(JSON.stringify(newRecipe.directions[0])));

    let asdf = {
      id: 'd1ebd2d4-5814-4381-ae26-b022b3b4b13b',
      imageUrl: '',
      instruction: 'H',
      step: '1',
    };

    console.log(
      ` ${[
        `{
        id: ${newRecipe.directions[0].id},
        instruction: ${newRecipe.directions[0].instruction},
        imageUrl: ${newRecipe.directions[0].imageUrl},
        step: ${newRecipe.directions[0].step},
      }`,
      ]}`,
    );
    Axios.post(
      'https://fuxxebseq4.execute-api.us-west-2.amazonaws.com/Prod/graphql',
      {
        query: `mutation {
          createRecipe(userId: "google_105903723515146180187", recipe: {
          category: "${newRecipe.category}",
          cookTime: "${newRecipe.cookTime}",
          name: "${newRecipe.name}",
          description: "${newRecipe.description}",  
          imageUrl: "${newRecipe.imageUrl}",
          prepTime: "${newRecipe.prepTime}",
          servingSize: "${newRecipe.servingSize}",
          directions: ${[
            `{
              id: "${newRecipe.directions[0].id}",
              instruction: "${newRecipe.directions[0].instruction}",
              imageUrl: "${newRecipe.directions[0].imageUrl}",
              step: "${newRecipe.directions[0].step}",
            }`,
          ]},
          ingredients: [],
          creationDate: "${new Date().toLocaleDateString()}"
        }) {
            id
            name          
          }
        }
        
        `,
      },
    )
      // Axios.get('https://fuxxebseq4.execute-api.us-west-2.amazonaws.com/Prod/')
      .then(function (response: any) {
        // handle success
        console.log('asdf');
        console.log(JSON.stringify(response.data));
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
