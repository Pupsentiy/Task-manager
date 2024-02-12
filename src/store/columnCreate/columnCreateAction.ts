import { ActionType, SetTitleColumn } from "./types";

export const addTitleColumnAction = (title: string): SetTitleColumn => ({
  type: ActionType.SET_TITLE_COLUMN,
  payload: title,
});

export const resetStateColumnAction = () => ({
  type: ActionType.RESET_STATE,
});
