export const SET_USER = 'SET_USER';

export interface UserState {
    user: User;
}

export interface User {
    name: string;
    email: string;
    photo?: string;
    location?: string;
    bio?: string;
    creationDate: Date;
    /** String arrays represent mongodb direct ids */
    recipes: string[];
    groups: string[];
    bookmarks: string[];
    shoppinglist: string[];
    followers: string[];
    following: string[];
    reviews: string[];
    pictures: string[];
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

export type UserActionTypes = SetUserAction;