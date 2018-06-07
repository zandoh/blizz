import * as actionType from "./ActionType";

export const addCharacter = payload => ({
  type: actionType.ADD_CHARACTER,
  payload: payload
});

export const removeCharacter = () => ({
  type: actionType.REMOVE_CHARACTER
});

export const getCharacter = () => ({
  type: actionType.GET_CHARACTER
});
