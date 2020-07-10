export const SET_USER = 'SET_USER';

export interface UserState {
    user: User;
}

export interface User {
    name: string;
    email: string;
    phoneNumber: string;
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

export type UserActionTypes = SetUserAction;