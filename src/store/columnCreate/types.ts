import { Action } from "redux";

export interface ColumnCreateSchema {
  id: string | null;
  title: string;
  task: any[];
}

export enum ActionType {
  SET_TITLE_COLUMN = "SET_TITLE_COLUMN",
  RESET_STATE = "RESET_STATE",
}

export interface SetTitleColumn extends Action {
  type: ActionType.SET_TITLE_COLUMN;
  payload: string;
}

export interface ResetStateBoard extends Action {
  type: ActionType.RESET_STATE;
}

export type ColumnCreateActionType = SetTitleColumn | ResetStateBoard;
