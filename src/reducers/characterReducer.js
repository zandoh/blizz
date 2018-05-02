import * as actionType from "../actions/ActionType";

const characterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionType.ADD_CHARACTER:
      return {
        ...state,
        character: action.payload,
        characterLoaded: !state.characterLoaded
      };
    case actionType.REMOVE_CHARACTER:
      return {
        ...state,
        character: null,
        characterLoaded: false
      };
    default:
      return state;
  }
};

export default characterReducer;
