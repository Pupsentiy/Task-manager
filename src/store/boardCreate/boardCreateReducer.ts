import { ActionType, ActionTypes, BoardCreateSchema } from "./types";

const initialState: BoardCreateSchema = {
  id: null,
  title: "",
  backdrop: "",
};

export const boardCreateReducer = (
  state = initialState,
  action: ActionType,
): BoardCreateSchema => {
  switch (action.type) {
    case ActionTypes.SET_TITLE_BOARD:
      return {
        ...state,
        title: action.payload,
      };
    case ActionTypes.SET_BACKDROP_BOARD:
      return {
        ...state,
        backdrop: action.payload,
      };
    default:
      return state;
  }
};
