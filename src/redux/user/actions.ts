import { SET_USER, UserActionTypes, User } from "./types";

export const set = (user: User): UserActionTypes => {
    return {
        type: SET_USER,
        payload: user
    };
};
