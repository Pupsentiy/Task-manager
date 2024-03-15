import { Action } from 'redux';

export interface ColumnCreateSchema {
  id: null | string;
  task: any[];
  title: string;
}

export enum ActionType {
  RESET_STATE = 'RESET_STATE',
  SET_TITLE_COLUMN = 'SET_TITLE_COLUMN',
}

export interface SetTitleColumn extends Action {
  payload: string;
  type: ActionType.SET_TITLE_COLUMN;
}

export interface ResetStateBoard extends Action {
  type: ActionType.RESET_STATE;
}

export type ColumnCreateActionType = ResetStateBoard | SetTitleColumn;
