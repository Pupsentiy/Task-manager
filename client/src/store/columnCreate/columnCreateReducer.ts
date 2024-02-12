import {
  ActionType,
  ColumnCreateActionType,
  ColumnCreateSchema,
} from "./types";

const initialState: ColumnCreateSchema = {
  id: null,
  title: "",
  task: [],
};

export const columnCreateReducer = (
  state = initialState,
  action: ColumnCreateActionType,
): ColumnCreateSchema => {
  switch (action.type) {
    case ActionType.SET_TITLE_COLUMN:
      return {
        ...state,
        title: action.payload,
      };
    case ActionType.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
