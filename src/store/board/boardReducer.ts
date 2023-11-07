import { v4 as uuidV4 } from "uuid";
import { ActionType, BoardActionType, BoardSchema } from "./types";

const initialState: BoardSchema = {
  boards: [],
};

export const boardReducer = (
  state = initialState,
  action: BoardActionType,
): BoardSchema => {
  switch (action.type) {
    case ActionType.ADD_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards,
          {
            id: uuidV4().slice(0, 10),
            title: action.payload.title,
            backdrop: action.payload.backdrop,
          },
        ],
      };

    default:
      return state;
  }
};
