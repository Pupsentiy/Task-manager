import { AllActionType, BoardSchema } from "./types";

const initialState: BoardSchema = {
  boards: [],
};

export const boardReducer = (state = initialState, action: AllActionType) => {
  switch (action.type) {
    // case ActionType.ADD_BOARD:
    //   return {
    //     ...state,
    //     boardCreate: [...state.boardCreate, action.payload],
    //   };
    // case ActionType.SET_TITLE_BOARD:
    //   return {
    //     ...state,
    //     boardCreate: [...state.boardCreate, action.payload],
    //   };

    default:
      return state;
  }
};
