import { CREATE_RECIPE, RecipeState, RecipeActionTypes, Recipe } from "./types";

export const RecipeReducer = (state: RecipeState = { recipes: [] }, action: RecipeActionTypes) => {
    switch (action.type) {
        case CREATE_RECIPE:
            return {
                recipes: [...state.recipes, action.payload],
            };
        default:
            return state;
    }
};
