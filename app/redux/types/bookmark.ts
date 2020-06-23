export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const EDIT_BOOKMARK = 'EDIT_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';


interface AddBookmarkAction {
    type: typeof ADD_BOOKMARK
}

interface EditBookmarkAction {
    type: typeof EDIT_BOOKMARK
}

interface DeleteBookmarkAction {
    type: typeof DELETE_BOOKMARK
}

export interface Bookmark {
    recipeid: number
}

export type CountActionTypes = AddBookmarkAction | EditBookmarkAction | DeleteBookmarkAction;
