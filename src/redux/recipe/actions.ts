import { CREATE_RECIPE, RecipeActionTypes, Recipe } from "./types";

export const add = (newItem: Recipe): RecipeActionTypes => {
    return {
        type: CREATE_RECIPE,
        payload: newItem
    };
};
