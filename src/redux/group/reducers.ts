import {
  ADD_GROUP,
  EDIT_GROUP,
  REMOVE_GROUP,
  GroupActionTypes,
  Group,
  GroupsState,
} from './types';

export const Groups = (
  state: GroupsState = {groups: []},
  action: GroupActionTypes,
) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        groups: [...state.groups, action.payload],
      };
    case EDIT_GROUP:
      return {
        groups: state.groups.map((group: Group) =>
          group.id === action.payload.id ? action.payload : group,
        ),
      };
    case REMOVE_GROUP:
      return {
        groups: [
          ...state.groups.filter((group: Group) => group.id !== action.groupid),
        ],
      };
    default:
      return state;
  }
};
