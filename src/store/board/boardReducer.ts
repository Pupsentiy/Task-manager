import { generateCode } from "@/utils/helpers";
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
            id: String(generateCode()),
            title: action.payload.title,
            backdrop: action.payload.backdrop,
          },
        ],
      };

    default:
      return state;
  }
};
