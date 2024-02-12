import { generateCode } from "@/utils/helpers";
import { ActionType, BoardActionType, BoardSchema } from "./types";

const initialState: BoardSchema = {
  board: [],
};
export const boardReducer = (
  state = initialState,
  action: BoardActionType,
): BoardSchema => {
  switch (action.type) {
    case ActionType.ADD_BOARD:
      return {
        ...state,
        board: [
          ...state.board,
          {
            id: String(generateCode()),
            title: action.payload.title,
            backdrop: action.payload.backdrop,
            column: [],
          },
        ],
      };
    case ActionType.ADD_COLUMN:
      return {
        ...state,
        board: state.board.map((board) => {
          if (board.id === action.payload.boardId) {
            board.column = [
              ...board.column,
              {
                id: String(generateCode()),
                title: action.payload.title,
                task: [],
              },
            ];
          }
          return board;
        }),
      };

    default:
      return state;
  }
};
