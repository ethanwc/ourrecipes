export const ADD_GROUP = 'ADD_GROUP';
export const EDIT_GROUP = 'EDIT_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

export interface GroupsState {
    groups: Group[]
}

export interface Group {
    id: string;
    name: string;
    creatorid: string;
    memberids: string[];
    creationDate: Date;
}

interface AddGroupAction {
    type: typeof ADD_GROUP
    payload: Group
}

interface EditGroupAction {
    type: typeof EDIT_GROUP
    payload: Group
}

interface RemoveGroupAction {
    type: typeof REMOVE_GROUP
    groupid: string;
}

export type GroupActionTypes = AddGroupAction | EditGroupAction | RemoveGroupAction;