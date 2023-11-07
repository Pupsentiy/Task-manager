import { ActionType, BoardCreateActionType, BoardCreateSchema } from "./types";

const initialState: BoardCreateSchema = {
  id: null,
  title: "",
  backdrop: "#0079bf",
};

export const boardCreateReducer = (
  state = initialState,
  action: BoardCreateActionType,
): BoardCreateSchema => {
  switch (action.type) {
    case ActionType.SET_TITLE_BOARD:
      return {
        ...state,
        title: action.payload,
      };
    case ActionType.SET_BACKDROP_BOARD:
      return {
        ...state,
        backdrop: action.payload,
      };
    case ActionType.RESET_STATE:
      return {
        ...state,
        id: null,
        title: "",
        backdrop: "#0079bf",
      };

    default:
      return state;
  }
};
