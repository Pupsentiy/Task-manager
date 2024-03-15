import { generateCode } from '@/utils/helpers';

import { ActionType, BoardActionType, BoardSchema } from './types';

const initialState: BoardSchema = {
  board: [],
};
export const boardReducer = (state = initialState, action: BoardActionType): BoardSchema => {
  switch (action.type) {
    case ActionType.ADD_BOARD:
      return {
        ...state,
        board: [
          ...state.board,
          {
            backdrop: action.payload.backdrop,
            column: [],
            id: String(generateCode()),
            title: action.payload.title,
          },
        ],
      };
    case ActionType.ADD_COLUMN:
      return {
        ...state,
        board: state.board.map(board => {
          if (board.id === action.payload.boardId) {
            board.column = [
              ...board.column,
              {
                id: String(generateCode()),
                task: [],
                title: action.payload.title,
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
