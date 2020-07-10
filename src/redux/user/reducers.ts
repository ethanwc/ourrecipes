import { SET_USER, User, UserState, UserActionTypes } from "./types";

export const UserReducer = (state: UserState = { user: { name: 'Loading Name', email: 'loadingemail@ourrecipes.app', phoneNumber: '123-456-7890' } }, action: UserActionTypes) => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload
            };
        default:
            return state;
    }
};
