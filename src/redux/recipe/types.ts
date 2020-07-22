export const CREATE_RECIPE = 'CREATE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

export interface RecipeState {
    recipes: Recipe[]
}

/** Ingredient type */
export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
}

/** Direction type, image is optional */
export interface Direction {
    instruction: string;
    step: number;
    imageUrl: string | undefined;
}

/** Recipe type */
export interface Recipe {
    id: string;
    name: string;
    creatorid: string;
    creationDate: string;
    prepTime: string;
    cookTime: string;
    servingSize: number;
    category: string;
    ingredients: Ingredient[];
    directions: Direction[];
}

interface CreateRecipeAction {
    type: typeof CREATE_RECIPE
    payload: Recipe
}

interface EditReicpeAction {
    type: typeof EDIT_RECIPE
    payload: Recipe
}

interface RemoveRecipeAction {
    type: typeof REMOVE_RECIPE
    recipeid: string;
}

export type RecipeActionTypes = CreateRecipeAction | EditReicpeAction | RemoveRecipeAction;
